import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pass } from '../../interfaces';
import firebase from 'firebase';

import { AuthenticationService } from '../../services/authentication-service';
import { Observable } from 'rxjs';

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

  constructor(private router: Router,
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
              let temp:Pass = {
                type: doc.data().type,
                garage_name: doc.data().garage_name,
                expiry: doc.data().expiry,
              };
              self.permits.push(temp);
          });
      });
    }
  }

  toAddPermit() {
    this.router.navigate(['']);
  }

}