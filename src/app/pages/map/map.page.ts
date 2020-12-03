import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})

  export class MapPage {
    public zoom: number = 14;
  
    constructor( private geolocation: Geolocation) {
      let options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 3600 };
      this.geolocation
        .getCurrentPosition(options)
        .then(resp => {})
        .catch(error => {
          console.log('Error getting location', error);
        });
      let watch = this.geolocation.watchPosition();
     
    }
  }
  

  


