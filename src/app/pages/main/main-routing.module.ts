import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorariosPage } from './horarios/horarios.page';

import { MainPage } from './main.page';

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
    path: 'horarios/:cancha',
    loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosPageModule)
  }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
