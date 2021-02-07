import firebase from 'firebase';

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
    time: Date;
}