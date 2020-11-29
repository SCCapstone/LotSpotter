import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-lots',
  templateUrl: './all-lots.page.html',
  styleUrls: ['./all-lots.page.scss'],
})
export class AllLotsPage implements OnInit {

  private database = firebase.firestore();
  private lots:Lot[] = [];

  constructor(
  ) { }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    var self = this;
    this.database.collection('lots').onSnapshot(function(querySnapshot) {
      self.lots = [];
      querySnapshot.forEach(function(doc) {
        let a = doc.data();
        let lot:Lot = { name: a.name,
                addr: a.addr,
                currCap: a.currCap,
                maxCap: a.maxCap,
                desc: a.desc,
                loc: a.loc,
                lotType: a.lotType,
                id: doc.id,
        }
        self.lots.push(lot);
      });
    });
  }
}
