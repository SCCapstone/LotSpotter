import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

const routes: Routes = [
{
  path: '',
  component: MapPage
}

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7Xv6-oY-j1-PuLSfpd6WA4gDORz1WVmE',
      libraries: ['places']
    }),
    MapPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MapPage],
  declarations: [MapPage],
  providers: [Geolocation]
})
export class MapPageModule {}
