import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../../services/authentication-service";
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
    public nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmNewPassword: new FormControl('', Validators.required)
    });

  }

  signOut(){
    var self = this;
    this.afAuth.signOut().then( function() { 
      // Change the login state for the authentication protections.
      self.authService.setLoginState(false);
      self.nativeStorage.clear()
    })
   }

  changePassword(form) {
    var self = this;
    const user = firebase.auth().currentUser;
    
    /* The case for incorrect credentials */
    if (user.email != form.email) {
      self.wrongEmailOrPasswordAlert();
    } 

    if (user.email == form.email) {
      /* Use firebase's auth API to hangle the change password.
        each of these cases also sends a prompt to the user. */
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, form.oldPassword)
      user.reauthenticateWithCredential(credential).then( success => {
        if (form.newPassword != form.confirmNewPassword) {
          self.newPasswordsDontMatch();
        }

        if(form.newPassword == form.confirmNewPassword) {
          user.updatePassword(form.confirmNewPassword).then(function(){
            self.passwordChangeSuccess();
          }).catch(error => {
            self.passwordTooShortAlert();
          })
        }
      }).catch(error => {
        self.wrongEmailOrPasswordAlert();
      })
    }
  }

  /* The three below functions are alerts for the user to know the status of thier 
     password reset. */
     async wrongEmailOrPasswordAlert() {
      const alert = await this.alertController.create({
        message: 'The credentials you provided do not match the credentials of the currently logged in user.',
        buttons: ['OK'],
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    }

    async passwordTooShortAlert() {
      const alert = await this.alertController.create({
        message: 'Your new password must be at least 6 characters long.',
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
  
    async passwordChangeSuccess() {
      const alert = await this.alertController.create({
        message: 'Your password has successfully been changed. Signing you out and routing you to the login page!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.nativeStorage.clear()
              this.signOut(); 
              this.router.navigate(["/login"])
            }
          }
        ],  
      });
      await alert.present();
      let result = await alert.onDidDismiss();
    }

}
