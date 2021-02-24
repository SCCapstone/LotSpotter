import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pass } from '../../interfaces';
import firebase from 'firebase';

@Component({
  selector: 'app-manage-passes',
  templateUrl: './manage-passes.page.html',
  styleUrls: ['./manage-passes.page.scss'],
})
export class ManagePassesPage implements OnInit {

  constructor(private router: Router) {
  }

  private db = firebase.firestore();
  private permits:Pass[] = [];

  ngOnInit() {
    var self = this;
    self.db.collection("pass").onSnapshot(function(querySnapshot) {
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

  toAddPermit() {
    this.router.navigate(['']);
  }

}
