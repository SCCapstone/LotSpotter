import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PurchaseAPassPaymentPageRoutingModule } from './purchase-a-pass-payment-routing.module';

import { PurchaseAPassPaymentPage } from './purchase-a-pass-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PurchaseAPassPaymentPageRoutingModule
  ],
  declarations: [PurchaseAPassPaymentPage]
})
export class PurchaseAPassPaymentPageModule {}
