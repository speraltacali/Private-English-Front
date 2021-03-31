import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ListadoComponent } from './Listado/listado.component';
import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [
     ListadoComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
