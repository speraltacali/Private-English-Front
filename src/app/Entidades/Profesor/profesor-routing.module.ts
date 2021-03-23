import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorComponent } from './Listado/profesor.component';

const routes: Routes = [
  {path: 'profesor', component: ProfesorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
