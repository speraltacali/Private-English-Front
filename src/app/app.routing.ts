import { AuthGuard } from './AUTH/guard/auth.guard';
import { HomeComponent } from './Entidades/Home/nav-bar/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { EmpresaComponent } from './Entidades/Empresa/component/empresa.component';

const appRoutes = [
    { path: '' , redirectTo: '/empresa' , pathMatch: 'full'},
  ];

  export const routing = RouterModule.forRoot(appRoutes);