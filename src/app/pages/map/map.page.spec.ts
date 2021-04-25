import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapPage } from './map.page';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';

describe('MapPage', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  beforeEach(waitForAsync(() => {
  
    TestBed.configureTestingModule({
      declarations: [ MapPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule,
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
      providers: [ Geolocation ]
    }).compileComponents();

;
    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should get coordinates', () => {
    expectAsync(component.getMapPins()).toBeResolved();
  });
  
  it('should render title', () => {
    const comp = fixture.debugElement.nativeElement;
    expect(comp.querySelector('ion-title').textContent).toContain("Map");
  });

});
