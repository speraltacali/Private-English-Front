import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria.component';

const routes: Routes = [
  {path : 'Galeria' , component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaRoutingModule { }
