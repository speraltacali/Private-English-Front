import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/AUTH/guard/auth.guard';
import { SolicitudComponent } from './Solicitud/component/solicitud.component';

const routes: Routes = [
  {path: 'solicitud', component: SolicitudComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
