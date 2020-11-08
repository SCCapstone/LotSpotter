import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLotsPage } from './all-lots.page';

const routes: Routes = [
  {
    path: '',
    component: AllLotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllLotsPageRoutingModule {}
