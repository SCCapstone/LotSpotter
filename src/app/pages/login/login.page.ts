import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { browser, by, element } from 'protractor';
import { BackendService } from 'src/app/services/backend.service';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';


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
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
    var self = this;
    this.nativeStorage.getItem('creds').then(
      data => this.logIn(data.storedEmail, data.storedPassword)
    );
  }

  logIn(email, password){
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

      //get my users from database 
      firebase.firestore().collection("users").where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                var type = doc.data().usertype;
                console.log("usertype:"+type);
                self.backend.setUsertype(type);

                if(self.validCreds){
                  self.router.navigate(['home']);
                }
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }).catch(error => {


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


  



  }



  signupNav() {
  this.router.navigate(['signup']);
  }

  forgotPasswordNav() {
    this.router.navigate(['forgot-password'])
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

}