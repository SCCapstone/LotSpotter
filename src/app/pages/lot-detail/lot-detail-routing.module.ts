import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotDetailPage } from './lot-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LotDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotDetailPageRoutingModule {}
