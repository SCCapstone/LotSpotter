import { Injectable } from '@angular/core';
import { Pass } from "./../interfaces";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private DEBUG = false; // This is a flag for console.logs.
  private database = firebase.firestore();
  public userData: any;
  private loggedIn2:BehaviorSubject<boolean>; /* This is protection for features that need login */
  public favorites:Array<string> = [];
  public permits:Array<Pass> = [];

  constructor( public ngFireAuth: AngularFireAuth,
               public router: Router,  
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
    /* This is a way of monitoring state to protect a user, if they aren't
       logged in, from accessing features that can only exist for a current user. */
    this.loggedIn2 = new BehaviorSubject<boolean>(false);
  }

  // Change User Type
  cUserType(newtype) {
     if(this.DEBUG) console.log("in cUserType()"); 
     localStorage.setItem('user.userType', JSON.stringify(newtype));
     //  JSON.parse(localStorage.getItem('user'));
  }
  // Get user type
  gUserType(){
    if(this.DEBUG) console.log("in gUserType()"); 
    let currentUT = JSON.parse(localStorage.getItem("user.userType"));
    if(currentUT == null){
      currentUT = "Unknown"
    }
    return currentUT;
  }

  public setLoginState(state:boolean):void {
    if (this.DEBUG) console.log("in setLoginState()");
    this.loggedIn2.next(state);
  }
  public getLoginState(): Observable<boolean> {
    if (this.DEBUG) console.log("in getLoginState()");
    return this.loggedIn2.asObservable();
  }

  setFavorites(){
    var self = this;
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .onSnapshot(function (querySnapshot) {
      self.favorites = querySnapshot.data().favorites;
    })
    console.log("Favorites: "+this.favorites);
    return this.favorites;
  }
  
  updateFavorites(name:string){
    this.setFavorites();
    var index = this.favorites.indexOf(name);
    if(index == -1) {
      this.favorites.push(name);
    } else {
      this.favorites.splice(index, 1);
    }
    console.log("Changes made");
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .update({favorites: this.favorites});
    this.setFavorites();
  }
  
  setPermits(){
    var self = this;
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .onSnapshot(function (querySnapshot) {
      self.permits = querySnapshot.data().permits;
    })
    console.log("Permits: "+ this.permits);
    return this.permits;
  }
  
  updatePermits(permit:Pass){
    this.setPermits();
    var index = this.permits.indexOf(permit);
    if(index == -1) {
      this.permits.push(permit);
    } else {
      this.permits.splice(index, 1);
    }
    console.log("Changes made");
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    .update({permits: this.permits});
    this.setPermits();
  }
}