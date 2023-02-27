import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hairdressing',
    loadChildren: () => import('./pages/hairdressing/hairdressing.module').then( m => m.HairdressingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'makeup',
    loadChildren: () => import('./pages/makeup/makeup.module').then( m => m.MakeupPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'nails',
    loadChildren: () => import('./pages/nails/nails.module').then( m => m.NailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'appointments',
    loadChildren: () => import('./pages/appointments/appointments.module').then( m => m.AppointmentsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then( m => m.AboutMePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
