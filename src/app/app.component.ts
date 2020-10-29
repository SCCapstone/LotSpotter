import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {currentPageTitle = 'Dashboard';

appPages = [
  {
    title: 'Home',
    url: '/pages/home',
    icon: 'home'
  },
  {
    title: 'Avaliable Lots',
    url: '/pages/avaliable-lots',
    icon: 'film'
  },
  {
    title: 'All lots',
    url: '/pages/all-lots',
    icon: 'settings'
  },
  {
    title: 'Manage Passes',
    url: '/pages/manage-passes',
    icon: 'clipboard'
  },
  {
    title: 'Purchase Pass',
    url: '/pages/purchase-a-pass',
    icon: 'card'
  },
  {
    title: 'Settings',
    url: '/pages/settings',
    icon: 'settings'
  },
  {
    title: 'Map',
    url: '/pages/map',
    icon: 'map'
  },
  {
    title: 'Analytics',
    url: '/pages/analytics',
    icon: 'bar-chart'
  },
  {
    title: 'Favorites',
    url: '/pages/favorites',
    icon: 'star'
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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
