import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private platform: Platform) { }
    /* openMapsApp() will use a user's favorite maps app (set in phone settings)
       to get directions to a selected lot. */
    openMapsApp(location: string, label: string = "") {
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
}
