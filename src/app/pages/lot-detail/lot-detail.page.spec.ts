import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LotDetailPage } from './lot-detail.page';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

describe('LotDetailPage', () => {
  let component: LotDetailPage;
  let fixture: ComponentFixture<LotDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotDetailPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
          authDomain: "lotspotter-ba109.firebaseapp.com",
          databaseURL: "https://lotspotter-ba109.firebaseio.com",
          projectId: "lotspotter-ba109",
          storageBucket: "lotspotter-ba109.appspot.com",
          messagingSenderId: "142655337490",
          appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
          measurementId: "G-SBTVL9CDG0"
        })
      ], 
      providers : [ SocialSharing ],
    }).compileComponents();

    fixture = TestBed.createComponent(LotDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
