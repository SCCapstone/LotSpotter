import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { BackendService } from 'src/app/services/backend.service';
import { Lot } from '../../interfaces';
import { LocationService } from '../../services/location.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  private database = firebase.firestore();
  private lots:Lot[] = [];
  private openSpots:number = 0;
  public currentLot:Lot = {
    name: "...",
    addr: "...",
    currCap: 0,
    maxCap: 0,
    desc: "...",
    loc: null,
    lotType: "...",
    id: "..."
  };
  private loginState:boolean;

  constructor( private locServ: LocationService,
               private backend: BackendService,
               private auth: AuthenticationService) { 
    /* Authentication protection to ensure a logged out user cannot access favorites. */
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
    if (this.loginState) {
      this.auth.setFavorites();
      this.fetch();
    }
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
     This list has every lot from the 'lots' collection. */
  async fetch() {
    this.auth.setFavorites();
    var self = this;
    this.database.collection('users').doc(firebase.auth().currentUser.uid)
     .onSnapshot(function(querySnapshot) {
      self.lots = [];
      querySnapshot.data().favorites.forEach(function(doc) {
        console.log(doc);
        self.backend.getLotData(doc).then(function(res){
          let lot:Lot = { name: res.name,
                  addr: res.addr,
                  currCap: res.currCap,
                  maxCap: res.maxCap,
                  desc: res.desc,
                  loc: res.loc,
                  lotType: res.lotType,
                  id: res.id,
          };
            self.lots.push(lot);
          })
      });
    });
  }

}