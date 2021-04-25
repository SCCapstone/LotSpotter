import { StaticSymbol } from '@angular/compiler';
import { Injectable, Query } from '@angular/core';

import firebase from 'firebase';
import { Lot, MapPin, Pass } from '../interfaces';
import { Stat } from '../interfaces';
import { AuthenticationService } from "./authentication-service";


@Injectable({
  providedIn: 'root'
})

export class BackendService {

  private database = firebase.firestore();

  constructor() { }

  /* @breif: getLotData() will return document data from a single lot. Since 
             lots don't have duplicate names and there aren't many within
             the "lots" bucket, this will run a query at each function call.

     @returns: a LOT interface object, if the Promise is resolved.   
  */
  async getLotData(lotName:string):Promise<Lot> {
    let lot:Lot = null;
    let counter:number = 0;

    var self = this;
    await this.database.collection("lots").where("name", "==", lotName)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach( (doc) => {
            counter++;
            let a = doc.data();
            lot = { name: a.name,
                    addr: a.addr,
                    currCap: a.currCap,
                    maxCap: a.maxCap,
                    desc: a.desc,
                    loc: a.loc,
                    lotType: a.lotType,
                    id: doc.id,

            }
            // console.log(lot.id)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
    return new Promise<Lot>((resolve, reject) => {
      // Each lot has an original name; there shouldn't be more than 1.
      if (counter == 1) {
        resolve(lot);
      } else {
        reject("failed");
      }
    });
  }
  /* @breif: getCoordinates() will return document data from every
             lot in our "lots" collection from firestore. They have 
             thier own type, MapPin, for simplicity of moving data.
             This supports the Map page.

     @returns: a LOT interface object, if the Promise is resolved.   
  */
  async getCoordinates():Promise<Array<MapPin>> {
    let coords:Array<MapPin> = [];
    let pin:MapPin = null;

    await this.database.collection("lots").get().then(function(query) {
      query.forEach((doc) => {
        let temp = doc.data();
        let coord:firebase.firestore.GeoPoint = temp.loc;
        pin = {
          name: temp.name,
          lat: coord.latitude,
          long: coord.longitude,
          spots: "" + (temp.maxCap - temp.currCap)
        }
        coords.push(pin);
      })
    }).catch((error) => {
      console.log("Error getting coordinate data.");
    });
    
    return new Promise<Array<MapPin>>((resolve, reject) => {
      resolve(coords);
    });
  }
  /* @breif: getStats() will return document data from every
             lot in our "stats" collection from firestore. This is
             used in chart/graph generation.

     @returns: a an ARRAY of STAT interface objects, if the Promise is resolved.   
  */
  async getStats(lotName:string):Promise<Array<Stat>> {
    let stats:Array<Stat> = [];
    let stat:Stat = null;

    var self = this;
    await this.database.collection("stats").where("lot", "==", lotName)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach( (doc) => {
            let a = doc.data();
            stat = { action: a.action,
                    lot: a.lot,
                    currCap: a.currCap,
                    time: a.time,
            }
            stats.push(stat);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
    return new Promise<Array<Stat>>((resolve, reject) => {
      resolve(stats);
    });
  }

  /* @breif: addStat() will insert an event into the "stats" collection,
            simulating the entrance/exit from a lot. Used in the testing UI

     @returns: a doc.id if added; a 0 otherwise. 
  */
  addStat(stats:Stat):string {
    let status: string = "0"; 
    this.database.collection('stats').add(stats).then((res) => {
      status = res.id;
    }).catch((err) => {
      console.log("Could not add statistic.")
    });

    return status;
  } 

  /* @breif: updateItem() will update an event in the "lots" collection.

     @returns: an "OK" if added; a "0" otherwise. 
  */
  updateItem(newValues):string {
    let status:string = "0"
    this.database.collection("lots").doc(newValues.id).update(newValues)
      .then((res) => {
          status = "OK"; 
      }).catch((err) => {
          console.log("Could not update item.") 
      });

    return status;
  }

  /* @breif: newPurchase() will insert an event into the "purchase"
             collection.

     @returns: a doc.id if added; a 0 otherwise. 
  */
  newPurchase(purchase){
    let status: string = "0"; 
    this.database.collection('purchases').add(purchase).then((res) => {
      status = res.id;
    }).catch((err) => {
      console.log("Could not add purchase.")
    });

    return status;
  }
}
