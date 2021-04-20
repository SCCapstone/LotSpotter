import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseAPassShippingPage } from './purchase-a-pass-shipping.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseAPassShippingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseAPassShippingPageRoutingModule {}
