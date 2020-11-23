import { Injectable } from '@angular/core';

import firebase from 'firebase';

import { Lot } from '../interfaces';

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
                    lotType: a.lotType
            }
            // console.log(doc.id, " => ", doc.data());
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
}
