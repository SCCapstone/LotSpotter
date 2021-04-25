import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackendService } from 'src/app/services/backend.service';
import { MapPin} from '../../interfaces';


@Component({
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})

  export class MapPage {
    public zoom: number = 14;
    private pins: Array<MapPin> = [];

    private lat: number; // These are each bound values.
    private long: number; 
  
    constructor( private geolocation: Geolocation,
                 private backend: BackendService,
                 private router: Router,) {     
    }

    ngOnInit() {
      this.getMapPins();   
      // Get a user's current location for the agm-cirle.
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

    /* getMapPins() calls the backend service to get the Coordinates of lots
       in firebase, then populates a local list to be read by the HTML.
       
       Returns a PROMISE with a true if successful, false otherwise. */
    async getMapPins():Promise<boolean> {
      let status: boolean = false; 
      await this.backend.getCoordinates().then((res) => {
        this.pins = res; // Set the local pins to the result. 
        status = true; 
      });

      return new Promise<boolean>((resolve, reject) => {
        if (status == true) {
          resolve(true);
        }
        else reject(false);
      });
    }

    /* Navigation for the click of each pin, to it's detail page. */
    toLot(name:string):void {
      this.router.navigate(["/lot-detail",name]);
    }

  }
  

  


