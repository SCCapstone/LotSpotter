import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Environment } from '@ionic-native/google-maps';
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
  authDomain: "lotspotter-ba109.firebaseapp.com",
  databaseURL: "https://lotspotter-ba109.firebaseio.com",
  projectId: "lotspotter-ba109",
  storageBucket: "lotspotter-ba109.appspot.com",
  messagingSenderId: "142655337490",
  appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
  measurementId: "G-SBTVL9CDG0"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  
  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Available Lots',
      url: 'available-lots',
      icon: 'film'
    },
    {
      title: 'All lots',
      url: 'all-lots',
      icon: 'settings'
    },
    {
      title: 'Manage Passes',
      url: 'manage-passes',
      icon: 'clipboard'
    },
    /*{
      title: 'Purchase Pass',
      url: 'purchase-a-pass',
      icon: 'card'
    },*/
    {
      title: 'Map',
      url: 'map',
      icon: 'map'
    },
    {
      title: 'Analytics',
      url: 'analytics',
      icon: 'bar-chart'
    },
    {
      title: 'Favorites',
      url: 'favorites',
      icon: 'star'

    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyApLIm8vm_vQlT8z-IBRsppoRC8OJveW_Y',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyApLIm8vm_vQlT8z-IBRsppoRC8OJveW_Y'
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(firebaseConfig);
    });
  }
}
