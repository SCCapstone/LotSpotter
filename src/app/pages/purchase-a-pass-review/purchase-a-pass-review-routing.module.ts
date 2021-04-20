import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseAPassReviewPage } from './purchase-a-pass-review.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseAPassReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseAPassReviewPageRoutingModule {}
