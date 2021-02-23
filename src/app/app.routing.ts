import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SolicitudComponent } from './components/alumno/solicitud/solicitud.component';
import { AuthGuard } from './security/auth.guard';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';

const appRoutes = [
    { path: '' , redirectTo: '/home' , pathMatch: 'full'},
    {path: 'empresa', component: EmpresaComponent , canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent} ,
    {path: 'usuario', component: UsuarioComponent },
    {path: 'login', component: LoginComponent },
    {path: 'solicitud', component: SolicitudComponent },
    {path: 'empleado', component: EmpleadoComponent , canActivate: [AuthGuard]}
  ];

  export const routing = RouterModule.forRoot(appRoutes);