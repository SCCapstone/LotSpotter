import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseAPassPaymentPage } from './purchase-a-pass-payment.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseAPassPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseAPassPaymentPageRoutingModule {}
