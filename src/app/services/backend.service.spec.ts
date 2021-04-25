import { SecurityContext } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Stat } from '../interfaces';
import { BackendService } from './backend.service';
import firebase from 'firebase';

describe('BackendService', () => {
  let service: BackendService;
  let random:string[] = ["AD3", "S8", "AD1"]; 

  firebase.initializeApp({
    apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
    authDomain: "lotspotter-ba109.firebaseapp.com",
    databaseURL: "https://lotspotter-ba109.firebaseio.com",
    projectId: "lotspotter-ba109",
    storageBucket: "lotspotter-ba109.appspot.com",
    messagingSenderId: "142655337490",
    appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
    measurementId: "G-SBTVL9CDG0"
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  /*
  This test runs the Backend Services' getLotData() function to ensure a resolved
  promise is returned, indicating a successful request.
  */
  it("should get a lot's data", async () => {
    // Random index in the array.
    let randex: number = Math.floor(Math.random() * random.length);
    await expectAsync(service.getLotData(random[randex])).toBeResolved();
  });

  /* Validares the getCoordinates() function. */
  it("should get a lot's coordinates", async() => {
    await expectAsync(service.getCoordinates()).toBeResolved();
  });

  /* Validates the getStats() function. */
  it("should get statistics", async () => {
    let randex: number = Math.floor(Math.random() * random.length);
    await expectAsync(service.getStats(random[randex])).toBeResolved(); 
  });

  /* This is a test of the Creation and Deletion from our firebase 
     collections. */
  it("should add a stat, then delete it", async() => {
    let dummy:Stat = {
      action: 0,
      currCap: 200,
      lot: "AD3",
      time: firebase.firestore.Timestamp.fromDate(new Date())
    }
    /* If this function is successful, this will be a string with the id. If
       not, this will be a "0", which will make the expectAsync() below to fail. */
    let id:string = service.addStat(dummy); 

    await expectAsync(firebase.firestore().collection("stats")
            .doc(id).delete()).toBeResolved();
  });

});
