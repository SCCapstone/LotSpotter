import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllLotsPageRoutingModule } from './all-lots-routing.module';

import { AllLotsPage } from './all-lots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllLotsPageRoutingModule
  ],
  declarations: [AllLotsPage]
})
export class AllLotsPageModule {}
