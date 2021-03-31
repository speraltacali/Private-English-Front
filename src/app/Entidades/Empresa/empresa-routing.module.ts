import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/nav-bar/home.component';
import { EmpresaComponent } from './component/empresa.component';
import { GaleriaComponent } from './Galeria/galeria.component';


const routes: Routes = [
  {path: 'empresa', component: EmpresaComponent},
  {path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
