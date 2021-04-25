import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AllLotsPage } from './all-lots.page';
import { AngularFireModule } from '@angular/fire';

describe('AllLotsPage', () => {
  let component: AllLotsPage;
  let fixture: ComponentFixture<AllLotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLotsPage ],
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
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AllLotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
