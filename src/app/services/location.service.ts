import { Injectable } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import {
  ToastController,
  Platform
} from '@ionic/angular';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  map: GoogleMap;
  address:string;
  parking: string[] = ['Bull Street', 'Athletic Village', 
                'Blossom Street', 'Close-Hipp', 
              'Hampton', 'Pendleton Street', 
              'Senate Street', 'Sumter Street', 
              'Columbia Hall', 'S4', 'S8', 'GS4', 'AD1',
            'AD3', 'AD6', 'AD6', 'AD7', 'AD9', 'AD11', 'AD12'];

  constructor( public toastCtrl: ToastController,
               private platform: Platform, 
               private router: Router) { }

    public openMapsApp(location: string, label: string = "") {
      let status;
      let coordinates:string = location;
      
      if (this.platform.is('android')) {
        status = 'geo:' + coordinates + '?q=' + coordinates;
        if (label) {
          status += '(' + label + ')';
        }
      } else if (this.platform.is('desktop')){ // This will never be used. Don't release.
          status = 'https://maps.google.com/maps?q=@'+location;
      } 
      else {
        status = 'maps://maps.apple.com/?q=' + coordinates;
      }
      window.location.href = status;
    }

    navToLotDetail(lot:string):void {
      this.router.navigate(['/lot-detail', lot]);
    }
}
