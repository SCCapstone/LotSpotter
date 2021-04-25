/* NOTE: This page populates with passes that are both purchased in the app
   and passes that are added manually. */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassID } from '../../interfaces';
import firebase from 'firebase';
import { AuthenticationService } from '../../services/authentication-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-passes',
  templateUrl: './manage-passes.page.html',
  styleUrls: ['./manage-passes.page.scss'],
})

export class ManagePassesPage implements OnInit {

  private db = firebase.firestore();
  private permits:PassID[] = [];
  private uid:string = "";
  private loginState:boolean;
  private show_expired: boolean = true;
  private today:number = new Date().getTime();

  constructor(private router: Router,
              private alert: AlertController,
              private auth: AuthenticationService) {
    /* Authtication protection: passes can only be displayed for a logged in user. */
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
    var self = this;
    if (this.loginState) {
      self.uid = this.auth.userData.uid;
      /* Grab all the passes that the user owns from the 'pass' collection. Create a local copy 
         for quick access and display. */
      self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
          self.permits=[];
          querySnapshot.forEach(function(doc) {
              let temp:PassID = {
                type: doc.data().type,
                garage_name: doc.data().garage_name,
                expire: doc.data().expire,
                id: doc.id
              };
              self.permits.push(temp);
          });
      });
    }
  }

  /* For routing, but with additional layers of auth protection. */
  toAddPermit() {
    if (this.loginState) {
      this.router.navigate(['/add-permit']);
    } else {
      this.showAlert("We can't find you! Please log in to add your permits.");
    }
  }

  /* toggler() handles the display of expired/current passes. This function needs 
     to query firebase when it's updated.*/
  toggler():boolean {
    // The case to show ALL owned passes, both current and expired. 
    if (this.show_expired) {
      var self = this;
      if (this.loginState) {
        this.showAlert("Showing all passes.");
        self.uid = self.auth.userData.uid;
        self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
            self.permits=[];
            querySnapshot.forEach(function(doc) {
                let temp:PassID = {
                  type: doc.data().type,
                  garage_name: doc.data().garage_name,
                  expire: doc.data().expire,
                  id: doc.id
                };
                self.permits.push(temp);
            });
        });
      } else {
        this.showAlert("Not logged in. Not passes can be found.");
      }
      return true;
    // The case to handle displaying only CURRENT passes.
    } else {
      var self = this;
      if (this.loginState) {
        this.showAlert("Hiding expired passes.");
        self.uid = self.auth.userData.uid;
        self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
            self.permits=[];
            querySnapshot.forEach(function(doc) {
                let temp:PassID = {
                  type: doc.data().type,
                  garage_name: doc.data().garage_name,
                  expire: doc.data().expire,
                  id: doc.id
                };
                /* Check today's date, compare to what's found on the document. If
                   it's current--add it. */
                let x = new Date(temp.expire);
                if(self.today < x.getTime()) {
                  self.permits.push(temp);
                }
            });
        });
      }  else {
        this.showAlert("Not logged in. Not passes can be found.");
      }
      return true;
    }
    return false; // catch all
  }

  async showAlert(msg:string) {
    const alert = await this.alert.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  /* cardClick() handles the user's option to delete passes they could have entered incorrectly, 
     or that could just not be desired anymore. */
  async cardClick(item) {
    const alert = await this.alert.create({
      message: "Would you like to delete this pass?",
      buttons: ["Cancel", 
        { 
          text: "OK",
          handler: (func) => {
            var self = this;
            // Firebase delete
            self.db.collection("pass").doc(item.id).delete();
            // Local Delete
            self.permits.forEach((value, index) => {
              if (value.id==item.id) self.permits.splice(index,1);
            });
          }
        } 
      ]
    });
    alert.present();
  }
  
}