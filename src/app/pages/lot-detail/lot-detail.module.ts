import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotDetailPageRoutingModule } from './lot-detail-routing.module';

import { LotDetailPage } from './lot-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotDetailPageRoutingModule
  ],
  declarations: [LotDetailPage]
})
export class LotDetailPageModule {}
