import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchaseAPassReviewPage } from './purchase-a-pass-review.page';

describe('PurchaseAPassReviewPage', () => {
  let component: PurchaseAPassReviewPage;
  let fixture: ComponentFixture<PurchaseAPassReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAPassReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseAPassReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
