import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LotDetailPage } from './lot-detail.page';

describe('LotDetailPage', () => {
  let component: LotDetailPage;
  let fixture: ComponentFixture<LotDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LotDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
