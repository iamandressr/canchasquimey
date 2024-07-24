import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { HorariosPage } from './horarios/horarios.page';
import { ListasPage } from './listas/listas.page';
import { ListasResolver } from './listas/listas.resolver';



const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'horarios/:canchaId',
    loadChildren: () => import('./horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'listas/:reservaId/:horario',
    loadChildren: () => import('./listas/listas.module').then(m => m.ListasPageModule),
    resolve: {
      routeData: ListasResolver
    }
  }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
