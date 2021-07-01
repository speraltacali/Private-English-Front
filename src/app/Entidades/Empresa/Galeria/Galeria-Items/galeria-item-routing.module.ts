import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaItemComponent } from './galeria-item.component';

const routes: Routes = [
  {path:'galeria-item' , component: GaleriaItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaItemRoutingModule { }
