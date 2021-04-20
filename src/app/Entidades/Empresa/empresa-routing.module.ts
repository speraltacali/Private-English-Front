import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/nav-bar/home.component';
import { EmpresaComponent } from './component/empresa.component';
import { GaleriaComponent } from './Galeria/galeria.component';
import { NovedadesComponent } from './Novedades/novedades.component';


const routes: Routes = [
  {path: 'empresa', component: EmpresaComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'novedades', component: NovedadesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
