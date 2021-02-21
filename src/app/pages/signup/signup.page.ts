import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import firebase from 'firebase';
import { BackendService } from 'src/app/services/backend.service';
import { AlertController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user={
    email:"",
    password:"",
    usertype:""
  }
  

  constructor(
    private router: Router,
    private backend: BackendService,
    private alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {}

   signUp(email, password){
    var self = this;
    this.user.email = email.value;
    this.user.password = password.value;
    console.log(this.user.email+" "+this.user.password);

    this.afAuth.createUserWithEmailAndPassword(this.user.email, this.user.password).catch(
  		function(error) {
	  // Handle Errors here.
	  console.log(error);
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(error.message);
	  if(errorCode.length > 0){
	  	console.log("Failed");
	  }
	  else{
	  	console.log("signup ok")
	  }
	  // ...
	}).then(function(result){
			var user = firebase.auth().currentUser;
			 var db = firebase.firestore();
		          db.collection("users").add({
                'uid':user.uid,
                'email':user.email,
                'favorites':[],
                'permits':[]
		            		          
		      })
		      .then(function(docRef) {
		          console.log("user written with ID: ", docRef.id);
		      })
		      .catch(function(error) {
		          console.error("Error adding document: ", error);
		      });

		  	console.log("finished creating account")
		  	console.log("Account created with userID: "+user.uid)

        self.signUpNotification();
        self.router.navigate(["/login"]);
        
	});
 


  }

  async signUpNotification() {
    let alert = await this.alertCtrl.create({
      message: 'Thank you for signing up, please input your information again on the next page to log in.',
      buttons: [{
        text: 'Dismiss',
        handler: () => {
          console.log('No clicked');
        }}]
    });
    await alert.present();
  }

}