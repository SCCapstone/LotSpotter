import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { PurchaseAPassPaymentPage } from './purchase-a-pass-payment.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

describe('PurchaseAPassPaymentPage', () => {
  let component: PurchaseAPassPaymentPage;
  let fixture: ComponentFixture<PurchaseAPassPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAPassPaymentPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, ReactiveFormsModule,
        AngularFireModule.initializeApp({
          apiKey: "AIzaSyAQN02izLyzeBTCBsBIADHoWSMu8nOfLWI",
          authDomain: "lotspotter-ba109.firebaseapp.com",
          databaseURL: "https://lotspotter-ba109.firebaseio.com",
          projectId: "lotspotter-ba109",
          storageBucket: "lotspotter-ba109.appspot.com",
          messagingSenderId: "142655337490",
          appId: "1:142655337490:web:986c04ebfa6dd8cbef14cb",
          measurementId: "G-SBTVL9CDG0"
        })],
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    fixture = TestBed.createComponent(PurchaseAPassPaymentPage);
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
