import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackendService } from 'src/app/services/backend.service';
import { Lot, MapPin, Pass } from '../../interfaces';


@Component({
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})

  export class MapPage {
    public zoom: number = 14;
    private pins: Array<MapPin> = [];

    private lat: number; 
    private long: number; 
  
    constructor( private geolocation: Geolocation,
                 private backend: BackendService,
                 private router: Router,) {     
    }

    ngOnInit() {
      this.getMapPins();   
      // Get a user's current location.
      let options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
      this.geolocation.getCurrentPosition(options).then(resp => {
          console.log(resp.coords)
          this.lat = resp.coords.latitude;
          this.long = resp.coords.longitude;
        })
        .catch(error => {
          console.log('Error getting location', error);
        });
    }

    async getMapPins() {
      await this.backend.getCoordinates().then((res) => {
        this.pins = res;
      })
    }

    toLot(name:string):void {
      this.router.navigate(["/lot-detail",name]);
    }

    
  }
  

  


