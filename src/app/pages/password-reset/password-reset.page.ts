import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  resetPassword(email, oldPassword, newPassword, confirmNewPassword) {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
    user.email, 
    oldPassword
);
// Now you can use that to reauthenticate
  user.reauthenticateWithCredential(credential).then(
  
  )
  }

}
