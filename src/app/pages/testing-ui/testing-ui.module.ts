import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingUiPageRoutingModule } from './testing-ui-routing.module';

import { TestingUiPage } from './testing-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingUiPageRoutingModule
  ],
  declarations: [TestingUiPage]
})
export class TestingUiPageModule {}
