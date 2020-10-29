import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePassesPage } from './manage-passes.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePassesPageRoutingModule {}
