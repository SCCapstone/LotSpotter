import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableLotsPageRoutingModule } from './available-lots-routing.module';

import { AvailableLotsPage } from './available-lots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableLotsPageRoutingModule
  ],
  declarations: [AvailableLotsPage]
})
export class AvailableLotsPageModule {}
