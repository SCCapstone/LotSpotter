import { Injectable } from '@angular/core';

import firebase from 'firebase';
//import { stat } from 'fs';

import { Lot } from '../interfaces';
import { Stat } from '../interfaces';

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

  async getStats(lotName:string):Promise<Stat> {
    let stat:Stat = null;
    let counter:number = 0;

    var self = this;
    await this.database.collection("stats").where("lot", "==", lotName)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach( (doc) => {
            counter++;
            let a = doc.data();
            stat = { action: a.action,
                    lot: a.lot,
                    currCap: a.currCap,
                    time: a.time,
            }
            // console.log(lot.id)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
    return new Promise<Stat>((resolve, reject) => {
      // Each lot has an original name; there shouldn't be more than 1.
      if (counter == 1) {
        resolve(stat);
      } else {
        reject("failed");
      }
    });
  }

  addStat(stats){
    this.database.collection('stats').add(stats);
  }

  // pulled updateItem from 546 class code
  docID: any;
  updateItem(newValues){
    // console.log(newValues.id);

    let newInfo = this.database.collection("lots").doc(newValues.id).update(newValues);
    // this.events.publish('dataloaded',Date.now());

    // let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    
    // if(newValues.img == undefined){
    // 	newValues.img = this.items[itemIndex].img
    // }

    // this.items[itemIndex] = newValues;
    // console.log(newValues.img);

    // console.log("now saving all items:");
    // let usersStringifiedObj = JSON.stringify(this.items);
    // localStorage.setItem("items", usersStringifiedObj);
  }


}
