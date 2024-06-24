import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaJugadoresPage } from './lista-jugadores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaJugadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaJugadoresPageRoutingModule {}
