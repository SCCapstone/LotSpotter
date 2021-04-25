import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import firebase from 'firebase'; 

/*
Error thrown on 4/25 for firebase not initing soon enough. This was the
solution I found:
https://stackoverflow.com/questions/40563140/error-no-firebase-app-default-has-been-created-call-firebase-app-initiali

AS
*/ 
firebase.initializeApp({
  apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
  authDomain: "lotspotter-ba109.firebaseapp.com",
  databaseURL: "https://lotspotter-ba109.firebaseio.com",
  projectId: "lotspotter-ba109",
  storageBucket: "lotspotter-ba109.appspot.com",
  messagingSenderId: "142655337490",
  appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
  measurementId: "G-SBTVL9CDG0"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7Xv6-oY-j1-PuLSfpd6WA4gDORz1WVmE' 
    })
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    AngularFirestoreModule,
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
