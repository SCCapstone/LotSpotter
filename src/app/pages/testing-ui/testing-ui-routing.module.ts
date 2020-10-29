import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingUiPage } from './testing-ui.page';

const routes: Routes = [
  {
    path: '',
    component: TestingUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingUiPageRoutingModule {}
