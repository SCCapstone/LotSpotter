import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { browser, by, element } from 'protractor';
import { BackendService } from 'src/app/services/backend.service';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logo: String;
  validCreds: boolean = false;
  rememberCreds: any;
  email: string;
  password: string;

  constructor(
    public router: Router,
    private backend: BackendService,
    public afAuth: AngularFireAuth,
    private auth: AuthenticationService,
    private nativeStorage: NativeStorage,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
    // This supports the bonus feature to keep a user logged in.
    this.nativeStorage.getItem('creds').then(
      data => this.logIn(data.storedEmail, data.storedPassword)
    );
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  /* logIn() handles reading the ionic inputs, then logging into the 
     application with the inputs.*/
  logIn(email, password):boolean {
    let status = false;

  	var self=this;
    this.validCreds = true;
	  this.afAuth.signInWithEmailAndPassword(email, password)
      .then(function(result){
      var user= firebase.auth().currentUser;
      console.log("Login succeeded.");
      console.log(user.uid);
      
      self.auth.setLoginState(true);

      if (self.rememberCreds) {
        self.nativeStorage.setItem('creds', {storedEmail: email, storedPassword: password })
          .then(
            () => console.log('Stored Credentials'),
            error => console.error('Error storing item', error)
          );
        
       }
      /* Get user from database, after ensuring they exist with afAuth */
      firebase.firestore().collection("users").where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                if(self.validCreds){
                  self.router.navigate(['home']);
                }
            });
          status = true;
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }).catch(error => {
      /* Handle the error cases for all the reasons someone shouldn't be able to log in.
         Each case will determine what prompt will be sent to a user, depending on the code.
         Simply sending an error code is not very useful to our users. */ 
      switch (error.code) {
        case 'auth/email-already-in-use':
          var message = "This email is already in use by another account."
          self.failedToLoginAlert(message)
          break;
        case 'auth/invalid-email':
         var message = "This email not valid."
          self.failedToLoginAlert(message)
          break;
        case 'auth/operation-not-allowed':
         var message = "This operation is not allowed."
         self.failedToLoginAlert(message)
          break;
        case 'auth/weak-password':
         var message = "This password is too weak."
         self.failedToLoginAlert(message)
          break;
        case 'auth/wrong-password':
          var message = "This password is incorrect."  
          self.failedToLoginAlert(message)
          break;
        case 'auth/user-not-found':
          var message = "An account does not exist for this user."
          self.failedToLoginAlert(message)
          break;
        default:
          console.log(error.message);
          break;
      }
      self.validCreds = false;
    });

    return status;
  }

  async failedToLoginAlert(message) {
    let alert = await this.alertCtrl.create({
      message: message,
      buttons: [{
        text: 'Dismiss',
        handler: () => {
          console.log('No clicked');
        }}]
    });
    await alert.present();
  }

  signupNav() {
    this.router.navigate(['signup']);
  }
  
  forgotPasswordNav() {
    this.router.navigate(['forgot-password'])
  }

}