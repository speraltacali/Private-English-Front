import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Listado/add/add.component';
import { EditComponent } from './Listado/edit/edit.component';
import { ListadoComponent } from './Listado/listado.component';

const routes: Routes = [
  {path: 'listado', component: ListadoComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
