import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './Galeria/galeria.component';
import { HomeComponent } from './nav-bar/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
