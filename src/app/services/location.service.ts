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
  /*
  img = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap" +
          "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318" +
          "&markers=color:red%7Clabel:C%7C40.718217,-73.998284" +
          "&key=AIzaSyA4gpqIrlhwjFpfkqm2e2lnnm-xxbJZXMQ"
  */
  constructor(public toastCtrl: ToastController,
    private platform: Platform) { }

    loadMap() {
      this.map = GoogleMaps.create('map_canvas');
      this.addParkingLots();
      this.getMyLocation();
      this.cameraToCampus();
    }

    getLots():string[] {
      return this.parking;
    }
  
    getMyLocation(){
  
      // Get the location of you
      this.map.getMyLocation().then((location: MyLocation) => {
        console.log(JSON.stringify(location, null ,2));
  
  
        //add a marker
        let marker: Marker = this.map.addMarkerSync({
          title: "You're Here",
          //snippet: 'This plugin is awesome!',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });
  
        //show the infoWindow
        marker.showInfoWindow();
  
        //If clicked it, display the alert
        // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //  this.showToast('clicked!');
        // });
  
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
          (data) => {
              console.log("Click MAP",data);
          }
        );
      })
      .catch(err => {
        //this.loading.dismiss();
        this.showToast(err.error_message);
      });
    }
  
    async showToast(message: string) {
      let toast = await this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
  
    async cameraToCampus(){
      this.map.animateCamera({
        target: {lat: 33.996963, lng: -81.031415},
        zoom: 17,
        tilt: 60,
        bearing: 140,
        duration: 5000
      }).then(() => {
        //alert("Camera target has been changed");
      });
    }

    addParkingLots() {
      /*  
       * Load markers on the map of UofSC parking lots.
       */
      // Parking Marker
      let marker0: Marker = this.map.addMarkerSync({
        title: 'Bull Street Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.994064,
          lng: -81.026516
        }
      });
      let marker1: Marker = this.map.addMarkerSync({
        title: 'Athletic Village Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.986533,
          lng: -81.024404
        }
      });
      let marker2: Marker = this.map.addMarkerSync({
        title: 'Blossom Street Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.993543,
          lng: -81.027456
        }
      });
      let marker3: Marker = this.map.addMarkerSync({
        title: 'Close-Hipp Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 34.000939,
          lng: -81.022866
        }
      });
      let marker4: Marker = this.map.addMarkerSync({
        title: 'Pendleton Street Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 34.000638,
          lng: -81.026847
        }
      });
      let marker5: Marker = this.map.addMarkerSync({
        title: 'Senate Street Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 34.001645,
          lng: -81.025427
        }
      });
      let marker6: Marker = this.map.addMarkerSync({
        title: 'Sumter Street Garage',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.992435,
          lng: -81.0228319
        }
      });
      let marker7: Marker = this.map.addMarkerSync({
        title: 'S4',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 34.001150,
          lng: -81.021478
        }
      });
      let marker8: Marker = this.map.addMarkerSync({
        title: 'S8',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.992606,
          lng: -81.024959
        }
      });
      let marker9: Marker = this.map.addMarkerSync({
        title: 'GS4',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.993309,
          lng: -81.036493
        }
      });
      let marker10: Marker = this.map.addMarkerSync({
        title: 'AD1',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.992151,
          lng: -81.035900
        }
      });
      let marker11: Marker = this.map.addMarkerSync({
        title: 'AD3',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.991624,
          lng: -81.033755
        }
      });
      let marker12: Marker = this.map.addMarkerSync({
        title: 'AD6',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.989863,
          lng: -81.023890
        }
      });
      let marker13: Marker = this.map.addMarkerSync({
        title: 'AD7',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 34.006127,
          lng: -81.025545
        }
      });
      let marker14: Marker = this.map.addMarkerSync({
        title: 'AD9',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.989918,
          lng: -81.022373
        }
      });
      let marker15: Marker = this.map.addMarkerSync({
        title: 'AD11',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.985505,
          lng: -81.021013
        }
      });
      let marker16: Marker = this.map.addMarkerSync({
        title: 'AD12',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 33.996711,
          lng: -81.034921
        }
      });
      //marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //alert('The University of South Carolina');
      //});
    }

    clearMap() {
      this.map.clear();
    }
}
