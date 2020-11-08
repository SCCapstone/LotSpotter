import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllLotsPage } from './all-lots.page';

describe('AllLotsPage', () => {
  let component: AllLotsPage;
  let fixture: ComponentFixture<AllLotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLotsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllLotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
