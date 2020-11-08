import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagePassesPage } from './manage-passes.page';

describe('ManagePassesPage', () => {
  let component: ManagePassesPage;
  let fixture: ComponentFixture<ManagePassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePassesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
