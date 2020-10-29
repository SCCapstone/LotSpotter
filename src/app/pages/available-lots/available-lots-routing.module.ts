import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableLotsPage } from './available-lots.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableLotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableLotsPageRoutingModule {}
