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
  
    constructor( private geolocation: Geolocation,
                 private backend: BackendService,
                 private router: Router) {

      let options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
      this.geolocation
        .getCurrentPosition(options)
        .then(resp => {})
        .catch(error => {
          console.log('Error getting location', error);
        });
      let watch = this.geolocation.watchPosition();
     
    }

    ngOnInit() {
      this.getMapPins();    
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
  

  


