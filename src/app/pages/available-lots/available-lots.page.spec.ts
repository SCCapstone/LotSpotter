import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvailableLotsPage } from './available-lots.page';

import { RouterTestingModule } from '@angular/router/testing';

describe('AvailableLotsPage', () => {
  let component: AvailableLotsPage;
  let fixture: ComponentFixture<AvailableLotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableLotsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    fixture = TestBed.createComponent(AvailableLotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate lots', () => {
    let temp:number = component.fetch();

    expect(temp).toBeGreaterThan(0);
  })

  afterEach(()=> {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });
  
});
