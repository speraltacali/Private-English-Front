import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaImageComponent } from './galeria-image.component';

const routes: Routes = [
  {path:'galeria-image' , component: GaleriaImageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleriaImageRoutingModule { }
