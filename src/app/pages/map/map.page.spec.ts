import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapPage } from './map.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('MapPage', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeEach(waitForAsync(() => {
  
    TestBed.configureTestingModule({
      declarations: [ MapPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [ Geolocation ]
    }).compileComponents();

    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  
  it('should create', function(done) {
    expect(component).toBeTruthy();
  });
  
  it('should get coordinates', function(done) {
    expectAsync(component.getMapPins()).toBeResolved();
  })
});
