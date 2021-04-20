import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';

import { LotDetailPageRoutingModule } from './lot-detail-routing.module';

import { LotDetailPage } from './lot-detail.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotDetailPageRoutingModule
  ],
  declarations: [LotDetailPage],
  providers: [ SocialSharing ]
})
export class LotDetailPageModule {}
