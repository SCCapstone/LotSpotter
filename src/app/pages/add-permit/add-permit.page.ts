import { typeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { BackendService } from 'src/app/services/backend.service';
import { Pass } from '../../interfaces';
import firebase from 'firebase';

@Component({
  selector: 'app-add-permit',
  templateUrl: './add-permit.page.html',
  styleUrls: ['./add-permit.page.scss'],
})
export class AddPermitPage implements OnInit {
  
  private date = "";
  private gar_name = "";
  private type = "";

  private loginState: boolean;
  private db = firebase.firestore();

  constructor( private router: Router,
               private auth: AuthenticationService,
               private back: BackendService,
               private alertController:AlertController ) { 
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
  }
  
  async submit() {
    if(this.loginState == false) {
      const alert = await this.alertController.create({
        message: 'Please login before you save your password.',
        buttons: ['OK']
      });
  
      await alert.present();
      let result = await alert.onDidDismiss();
      return;
    }
    // Nav to manage passes.
    this.db.collection('pass').add({
      type:this.type,
      garage_name:this.gar_name,
      expire: new Date(this.date).toDateString(),
      uid: this.auth.userData.uid
    });

    this.router.navigate(["/manage-passes"]);
  }
  

}
