import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosPageRoutingModule } from './horarios-routing.module';

import { HorariosPage } from './horarios.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosPageRoutingModule,
    SharedModule
  ]
})
export class HorariosPageModule {}
