import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../../services/authentication-service";
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  changePasswordForm: FormGroup;

  constructor(
    public afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmNewPassword: new FormControl('', Validators.required)
    });

  }


  async wrongEmailOrPasswordAlert() {
    const alert = await this.alertController.create({
      message: 'The credentials you provided do not match the credentials of the currently logged in user.',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  async newPasswordsDontMatch() {
    const alert = await this.alertController.create({
      message: 'The new passwords you provided do not match each other.',
      buttons: ['OK']
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  signOut(){
    var self = this;
    this.afAuth.signOut().then( function() { 
      console.log("logged out")
      self.authService.setLoginState(false);
    })
   }

  async passwordChangeSuccess() {
    const alert = await this.alertController.create({
      message: 'Your password has successfully been changed. Signing you out and routing you to the login page!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.signOut();  
            this.router.navigate(["/login"])
          }
        }
      ],
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    
    console.log(result);
  }

  



  changePassword(form) {
    var self = this;
    const user = firebase.auth().currentUser;
    
    if (user.email != form.email) {
      self.wrongEmailOrPasswordAlert();
    } 

    if (user.email == form.email) {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, form.oldPassword)
      user.reauthenticateWithCredential(credential).catch(error => {
        self.wrongEmailOrPasswordAlert();
      }).then( success => {
        if (form.newPassword != form.confirmNewPassword) {
          self.newPasswordsDontMatch();
        }

        if(form.newPassword == form.confirmNewPassword) {
          user.updatePassword(form.confirmNewPassword).then(function(){
            self.passwordChangeSuccess();
          })

        }
      })

      
    }
  }

}
