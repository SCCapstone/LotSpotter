import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddPermitPageRoutingModule } from './add-permit-routing.module';

import { AddPermitPage } from './add-permit.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    IonicModule,
    AddPermitPageRoutingModule
  ],
  declarations: [AddPermitPage]
})
export class AddPermitPageModule {}
