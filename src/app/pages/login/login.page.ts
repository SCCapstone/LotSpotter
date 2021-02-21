import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { browser, by, element } from 'protractor';
import { BackendService } from 'src/app/services/backend.service';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logo: String;
  validCreds: boolean = false;

  constructor(
    public router: Router,
    private backend: BackendService,
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
  }

  logIn(email, password){
  	var self=this;
    this.validCreds = true;
	this.afAuth.signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
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
        console.log("login succeeded");
        console.log(user.uid);

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

}