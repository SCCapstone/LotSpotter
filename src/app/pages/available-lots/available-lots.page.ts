import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { stat } from 'node:fs';
import { Lot } from '../../interfaces';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-available-lots',
  templateUrl: './available-lots.page.html',
  styleUrls: ['./available-lots.page.scss'],
})
export class AvailableLotsPage implements OnInit {

  private database = firebase.firestore();
  private lots:Lot[] = [];

  constructor (private locServ: LocationService) 
  { }

  ngOnInit() {
    this.fetch();
  }

  /* toLot() requests LocationService to open the maps app at a given set
     of coordinates. */
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

  /* fetch() will populate a local list of lots from firebase.
     This list has every lot from the 'lots' collection. 
     
     Unlike the fetch() in all-lots, this only populates a local
     list if lots have 70% of thier remaining spaces. 

     Returns PROMISE true if successful, false otherwise.
  */
  async fetch():Promise<boolean> {
    let status: boolean = false;
    var self = this;

    await this.database.collection('lots').onSnapshot(function(querySnapshot) {
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
        if(lot.currCap < .7*lot.maxCap) {
          self.lots.push(lot);
        }
        status = true; // At least one lot was correctly fetched.
      });
    });

    return new Promise<boolean>((resolve, reject) => {
      if (status) {
        resolve(true);
      }
      resolve(false);
    });
  }
}
