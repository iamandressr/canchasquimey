import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPersonasPage } from './registro-personas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPersonasPageRoutingModule {}
