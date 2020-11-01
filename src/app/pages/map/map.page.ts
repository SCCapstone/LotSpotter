import { Component, OnInit } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

import {
  Platform
} from '@ionic/angular';

import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: GoogleMap;
  address:string;
  /*
  img = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap" +
          "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318" +
          "&markers=color:red%7Clabel:C%7C40.718217,-73.998284" +
          "&key=AIzaSyA4gpqIrlhwjFpfkqm2e2lnnm-xxbJZXMQ"
  */
  constructor(
    private platform: Platform, private locServ: LocationService) { }

  ngOnInit() {
    this.platform.ready();
    this.locServ.loadMap();
    this.showPins();
  }

  centralizeCamera() {
    this.locServ.cameraToCampus();
  }

  showPins() {
    this.locServ.addParkingLots();
    this.locServ.getMyLocation();
  }

  clear(){
    this.locServ.clearMap();
  }

}
