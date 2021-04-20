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




    this.afAuth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function(result){
			var user = firebase.auth().currentUser;
			 var db = firebase.firestore();
		          db.collection("users").doc(user.uid).set({
                'uid':user.uid,
                'email':user.email,
                'favorites':[],
                'permits':[]
		            		          
		      })
		      .then(function(docRef) {
		          console.log("user written with ID: " + user.uid);
		      })
		      .catch(function(error) {
		          console.error("Error adding document: ", error);
		      });

		  	console.log("finished creating account")
		  	console.log("Account created with userID: "+user.uid)

        self.signUpNotification();
        self.router.navigate(["/login"]);
        
	}).catch(error => {
        switch (error.code) {
           case 'auth/email-already-in-use':
             var message = "This email is already in use by another account."
             self.failedTosignUpNotification(message)
             break;
           case 'auth/invalid-email':
            var message = "This email not valid."
             self.failedTosignUpNotification(message)
             break;
           case 'auth/operation-not-allowed':
            var message = "This operation is not allowed."
            self.failedTosignUpNotification(message)
             break;
           case 'auth/weak-password':
            var message = "Your password must be at least 6 characters."
            self.failedTosignUpNotification(message)
             break;
           default:
             console.log(error.message);
             break;
         }
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

  async failedTosignUpNotification(message) {
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