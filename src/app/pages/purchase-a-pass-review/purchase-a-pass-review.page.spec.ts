import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { PurchaseAPassReviewPage } from './purchase-a-pass-review.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

describe('PurchaseAPassReviewPage', () => {
  let component: PurchaseAPassReviewPage;
  let fixture: ComponentFixture<PurchaseAPassReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAPassReviewPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, 
               ReactiveFormsModule,
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

    fixture = TestBed.createComponent(PurchaseAPassReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
