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
});
