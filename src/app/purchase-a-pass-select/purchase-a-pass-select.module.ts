import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseAPassSelectPageRoutingModule } from './purchase-a-pass-select-routing.module';

import { PurchaseAPassSelectPage } from './purchase-a-pass-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseAPassSelectPageRoutingModule
  ],
  declarations: [PurchaseAPassSelectPage]
})
export class PurchaseAPassSelectPageModule {}
