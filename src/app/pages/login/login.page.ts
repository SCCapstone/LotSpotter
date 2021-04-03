import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { browser, by, element } from 'protractor';
import { BackendService } from 'src/app/services/backend.service';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


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
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
    console.log("login ngOnInIt")
    var self = this;
    this.nativeStorage.getItem('creds').then(
      data => this.logIn(data.storedEmail, data.storedPassword)
    );
    var d = new Date()
    console.log("login NgOnInIt Time: " + d.getTime())
  }

  ionViewDidLoad(){
    this.ngOnInit();
  }

  logIn(email, password){
  	var self=this;
    this.validCreds = true;
	  this.afAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
    console.log("in error catch")
    self.validCreds = false;

  
		if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else if (errorCode === 'auth/user-not-found'){
            alert("User does not exist");
          } 
          console.log(error);
  
		}
    ).then(function(result){
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
    });


  



  }



  signupNav() {
  this.router.navigate(['signup']);
  }

  forgotPasswordNav() {
    this.router.navigate(['forgot-password'])
  }

}