import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseAPassReviewPageRoutingModule } from './purchase-a-pass-review-routing.module';

import { PurchaseAPassReviewPage } from './purchase-a-pass-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseAPassReviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PurchaseAPassReviewPage]
})
export class PurchaseAPassReviewPageModule {}
