import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './Listado/profesor.component';


@NgModule({
  declarations: [
    ProfesorComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
