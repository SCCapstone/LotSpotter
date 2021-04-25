import { typeSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { BackendService } from 'src/app/services/backend.service';
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
    // Login state protection
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
  }
  
  /* submit() will be teh control for a user to manually add thier parking permit
     to the 'pass' collection. It grabs data from data bound to the component's
     .html file. 
  */
  async submit():Promise<string> {
    let id:string = "0";
    
    // Error check to make sure a user is logged in
    if(this.loginState == false) {
      const alert = await this.alertController.create({
        message: 'Please login before you save your pass.',
        buttons: ['OK']
      });
      await alert.present();
      let result = await alert.onDidDismiss();
      // If user is not logged in, this needs to be rejected.
      return new Promise<string>((resolve, reject) => {
        reject("0")
      });
    }

    await this.db.collection('pass').add({
      type:this.type,
      garage_name:this.gar_name,
      expire: new Date(this.date).toDateString(),
      uid: this.auth.userData.uid
    }).then((res) => {
      id = res.id; // Gets the id of a successfully written document
    });

    this.router.navigate(["/manage-passes"]);

    return new Promise<string>((resolve, reject) => {
      if (id != "0") {
        resolve(id);
      } else {
        reject("0");
      }
    });
  }
  

}
