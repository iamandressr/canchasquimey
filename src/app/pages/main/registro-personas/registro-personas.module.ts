import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPersonasPageRoutingModule } from './registro-personas-routing.module';

import { RegistroPersonasPage } from './registro-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPersonasPageRoutingModule
  ],
  declarations: [RegistroPersonasPage]
})
export class RegistroPersonasPageModule {}
