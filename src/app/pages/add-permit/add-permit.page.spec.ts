import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPermitPage } from './add-permit.page';

describe('AddPermitPage', () => {
  let component: AddPermitPage;
  let fixture: ComponentFixture<AddPermitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPermitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
