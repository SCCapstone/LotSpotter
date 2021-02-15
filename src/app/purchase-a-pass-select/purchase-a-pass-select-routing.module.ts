import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseAPassSelectPage } from './purchase-a-pass-select.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseAPassSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseAPassSelectPageRoutingModule {}
