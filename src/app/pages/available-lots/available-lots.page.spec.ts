import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvailableLotsPage } from './available-lots.page';

import { RouterTestingModule } from '@angular/router/testing';

describe('AvailableLotsPage', () => {
  let component: AvailableLotsPage;
  let fixture: ComponentFixture<AvailableLotsPage>;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableLotsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableLotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should render title', () => {
    const comp = fixture.debugElement.nativeElement;
    expect(comp.querySelector('ion-title').textContent).toContain("Available Lots");
  });

  it('should populate lots', () => {
    expectAsync(component.fetch()).toBeResolved();
  });
  
});
