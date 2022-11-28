import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hairdressing',
    loadChildren: () => import('./pages/hairdressing/hairdressing.module').then( m => m.HairdressingPageModule)
  },
  {
    path: 'makeup',
    loadChildren: () => import('./pages/makeup/makeup.module').then( m => m.MakeupPageModule)
  },
  {
    path: 'nails',
    loadChildren: () => import('./pages/nails/nails.module').then( m => m.NailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
