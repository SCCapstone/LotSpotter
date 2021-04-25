import { Injectable, NgZone } from '@angular/core';
import auth from "../../../node_modules/firebase"
import { User, Pass } from "./../interfaces";
import { Router, ActivatedRoute} from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase';
import { BehaviorSubject,Observable,of, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private DEBUG = false; // This is a flag for console.logs.

  private database = firebase.firestore();

  public userData: any;

  // I made this second login state value, because local storage is
  // acting very finnicky. - Austin
  private loggedIn2:BehaviorSubject<boolean>;

  public favorites:Array<string> = [];
  public permits:Array<Pass> = [];

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
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
    })
    this.loggedIn2 = new BehaviorSubject<boolean>(false);
  }

  // Register user with email/password
  RegisterUser(email, password) {
    if(this.DEBUG) console.log("in RegisterUser()"); 
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  // Email verification when new user register
  SendVerificationMail() {
    if(this.DEBUG) console.log("in SendVerMail()"); 
    return this.ngFireAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    if(this.DEBUG) console.log("in PWRecover()"); 
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return true;
  }

  // Store user in localStorage
  SetUserData(user) {
    if(this.DEBUG) console.log("in SetUserData()"); 
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      userType: user.userType
    }
    return userRef.set(userData, {
      merge: true
    })
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