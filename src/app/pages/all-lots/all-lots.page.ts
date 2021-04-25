import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LocationService } from '../../services/location.service';
import { BackendService } from 'src/app/services/backend.service';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
  selector: 'app-all-lots',
  templateUrl: './all-lots.page.html',
  styleUrls: ['./all-lots.page.scss'],
})
export class AllLotsPage implements OnInit {

  private database = firebase.firestore();
  private lots:Lot[] = [];

  constructor( private locServ: LocationService, 
                private backend: BackendService,
                private auth: AuthenticationService) 
  { }

  ngOnInit() {
    this.fetch();
    this.auth.setFavorites();
  }

  toLot(location:firebase.firestore.GeoPoint):void {
    this.locServ.openMapsApp(location.latitude + "," + location.longitude); 
  }

  doRefresh(event) {
    this.fetch();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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
