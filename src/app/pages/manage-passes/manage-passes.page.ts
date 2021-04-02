import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pass } from '../../interfaces';
import firebase from 'firebase';

import { AuthenticationService } from '../../services/authentication-service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-passes',
  templateUrl: './manage-passes.page.html',
  styleUrls: ['./manage-passes.page.scss'],
})
export class ManagePassesPage implements OnInit {

  private db = firebase.firestore();
  private permits:Pass[] = [];
  private uid:string = "";
  private loginState:boolean;
  private show_expired: boolean = true;
  private today:number = new Date().getTime();

  constructor(private router: Router,
              private alert: AlertController,
              private auth: AuthenticationService) {
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
      // console.log(value);
    });
  }

  ngOnInit() {
    var self = this;
    if (this.loginState) {
      self.uid = this.auth.userData.uid;
      self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
          self.permits=[];
          querySnapshot.forEach(function(doc) {
              console.log(doc.data());
              let temp:Pass = {
                type: doc.data().type,
                garage_name: doc.data().garage_name,
                expire: doc.data().expire,
              };
              
              self.permits.push(temp);
          });
      });
    }
  }

  toAddPermit() {
    if (this.loginState) {
      this.router.navigate(['/add-permit']);
    } else {
      this.showAlert("We can't find you! Please log in to add your permits.");
    }
  }

  toggler():boolean {
    if (this.show_expired) {
      var self = this;
      if (this.loginState) {
        this.showAlert("Showing all passes.");
        self.uid = self.auth.userData.uid;
        self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
            self.permits=[];
            querySnapshot.forEach(function(doc) {
                console.log(doc.data());
                let temp:Pass = {
                  type: doc.data().type,
                  garage_name: doc.data().garage_name,
                  expire: doc.data().expire,
                };
                self.permits.push(temp);
            });
        });
      } else {
        this.showAlert("Not logged in. Not passes can be found.");
      }
      return true;
    } else {
      var self = this;
      if (this.loginState) {
        this.showAlert("Hiding expired passes.");
        self.uid = self.auth.userData.uid;
        self.db.collection("pass").where("uid","==",self.uid).onSnapshot(function(querySnapshot) {
            self.permits=[];
            querySnapshot.forEach(function(doc) {
                console.log(doc.data());
                let temp:Pass = {
                  type: doc.data().type,
                  garage_name: doc.data().garage_name,
                  expire: doc.data().expire,
                };
                let x = new Date(temp.expire);
                if(self.today < x.getTime()) {
                  console.log(temp);
                  self.permits.push(temp);
                }
            });
        });
      }  else {
        this.showAlert("Not logged in. Not passes can be found.");
      }
      return true;
    }
    return false;
  }

  async showAlert(msg:string) {
    const alert = await this.alert.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


}