import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchaseAPassShippingPage } from './purchase-a-pass-shipping.page';

describe('PurchaseAPassShippingPage', () => {
  let component: PurchaseAPassShippingPage;
  let fixture: ComponentFixture<PurchaseAPassShippingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseAPassShippingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseAPassShippingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
