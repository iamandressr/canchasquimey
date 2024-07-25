import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { HorariosPage } from './horarios/horarios.page';



const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'horarios/:id',
        loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosPageModule)
      },
      {
        path: 'registro-personas/:horarioId',
        loadChildren: () => import('./registro-personas/registro-personas.module').then(m => m.RegistroPersonasPageModule)
      }
    ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
