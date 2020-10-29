import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePassesPageRoutingModule } from './manage-passes-routing.module';

import { ManagePassesPage } from './manage-passes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePassesPageRoutingModule
  ],
  declarations: [ManagePassesPage]
})
export class ManagePassesPageModule {}
