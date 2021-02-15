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