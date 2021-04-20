import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import firebase from 'firebase';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }


  async passwordChangeSuccess() {
    const alert = await this.alertController.create({
      message: 'An email has been sent to your LotSpotter email to initiate a password reset. You will now be navigated to the login page.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.router.navigate(["/login"])
          }
        }
      ],
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    
    console.log(result);
  }

  async passwordChangeNotSuccessful() { 
    const alert = await this.alertController.create({
      message: 'There was an error resetting your password. Please try again.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.router.navigate(["/login"])
          }
        }
      ],
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    
    console.log(result);

  }


  sendEmail(email) {
    var self = this;
    firebase.auth().sendPasswordResetEmail(email.value).then(function() {
      self.passwordChangeSuccess()
    }).catch(function (error) {
      self.passwordChangeNotSuccessful()

    })

  }

  

}
