import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HorariosPage } from './horarios/horarios.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
