import firebase from 'firebase';
import { Timestamp } from 'rxjs';

export interface Lot {
    name: string;
    addr: string;
    currCap: number;
    maxCap: number;
    desc: string; 
    loc: firebase.firestore.GeoPoint;
    lotType: string;
    id: string;
}

export interface Stat {
    action: number;
    lot: string;
    currCap: number;
    time: firebase.firestore.Timestamp;
}

export interface Purchase {
    pass_type: string,
    garage_name: string,
    shipping_name: string,
    street_address: string,
    apt_number: string,
    shipping_zip_code: string,
    city: string,
    state: string,
    country: string,
    pick_up_pass: boolean,
    card_name: string,
    card_number: string,
    exp_date: string,
    cvv: string,
    card_zip_code: string,
}

export interface Pass {
    type: string,
    garage_name: string,
    expire: Date
}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    userType: string;
 }

 export interface MapPin {
     name: string;
     lat: number;
     long: number;
 }

