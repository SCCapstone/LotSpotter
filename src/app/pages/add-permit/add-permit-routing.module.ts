import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPermitPage } from './add-permit.page';

const routes: Routes = [
  {
    path: '',
    component: AddPermitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPermitPageRoutingModule {}
