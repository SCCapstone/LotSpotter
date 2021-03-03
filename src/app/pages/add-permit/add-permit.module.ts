import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPermitPageRoutingModule } from './add-permit-routing.module';

import { AddPermitPage } from './add-permit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPermitPageRoutingModule
  ],
  declarations: [AddPermitPage]
})
export class AddPermitPageModule {}
