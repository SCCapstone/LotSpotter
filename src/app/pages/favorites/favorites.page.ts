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
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
    if (this.loginState) {
      this.backend.setFavorites();
      this.fetch();
    }
  }

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

  async fetch() {
    this.backend.setFavorites();
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