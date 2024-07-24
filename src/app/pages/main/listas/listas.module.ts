import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasPageRoutingModule } from './listas-routing.module';

import { ListasPage } from './listas.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListasResolver } from './listas.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasPageRoutingModule,
    SharedModule
  ],
  declarations: [ListasPage],
  providers: [ListasResolver]
})
export class ListasPageModule {}
