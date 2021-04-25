import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { PurchaseAPassSelectPage } from './purchase-a-pass-select.page';

describe('PurchaseAPassSelectPage', () => {
  let component: PurchaseAPassSelectPage;
  let fixture: ComponentFixture<PurchaseAPassSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAPassSelectPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
          authDomain: "lotspotter-ba109.firebaseapp.com",
          databaseURL: "https://lotspotter-ba109.firebaseio.com",
          projectId: "lotspotter-ba109",
          storageBucket: "lotspotter-ba109.appspot.com",
          messagingSenderId: "142655337490",
          appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
          measurementId: "G-SBTVL9CDG0"
        })]
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 11000;
    fixture = TestBed.createComponent(PurchaseAPassSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000; 
  });
});
