import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'teacherhome',
    loadChildren: () => import('./teacherhome/teacherhome.module').then(m => m.TeacherhomePageModule)
  },
  {
    path: 'studenthome',
    loadChildren: () => import('./studenthome/studenthome.module').then(m => m.StudenthomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
