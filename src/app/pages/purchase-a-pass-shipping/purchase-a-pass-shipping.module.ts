import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseAPassShippingPageRoutingModule } from './purchase-a-pass-shipping-routing.module';

import { PurchaseAPassShippingPage } from './purchase-a-pass-shipping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseAPassShippingPageRoutingModule
  ],
  declarations: [PurchaseAPassShippingPage]
})
export class PurchaseAPassShippingPageModule {}
