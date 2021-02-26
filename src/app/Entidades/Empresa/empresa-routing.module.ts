import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/nav-bar/home.component';
import { EmpresaComponent } from './component/empresa.component';

const routes: Routes = [
  {path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
