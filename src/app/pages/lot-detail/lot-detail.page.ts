import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import firebase from 'firebase';

import { BackendService } from '../../services/backend.service';
import { Lot } from '../../interfaces';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.page.html',
  styleUrls: ['./lot-detail.page.scss'],})
export class LotDetailPage implements OnInit {
 
  private map = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap \
  &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318 \
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284 \
  &key=AIzaSyA4gpqIrlhwjFpfkqm2e2lnnm-xxbJZXMQ"
  
  private openSpots:number = 0;

  private currentLot:Lot = {
    name: "...",
    addr: "...",
    currCap: 0,
    maxCap: 0,
    desc: "...",
    loc: null,
    lotType: "...",
    id: "...",
  }; 

  constructor( private router: Router, private route: ActivatedRoute,
               private backend: BackendService,
               private locServ: LocationService) { 
  }

  ngOnInit() {
    let param:string = this.route.snapshot.paramMap.get("name"); // src: https://www.youtube.com/watch?v=DZrWzoW4_4M
    this.backend.getLotData(param).then((res) => {
      this.currentLot = res;
      this.openSpots = res.maxCap - res.currCap;
      // TODO: Call the image API request.
    }).catch((message) => {
      console.log("Could not get lot data.")
    });
    console.log("Viewing Lot: " + param);
  }

  toLot(location:firebase.firestore.GeoPoint):void {
    this.locServ.openMapsApp(location.latitude + "," + location.longitude); 
  }

  getImage() {

  }

}
