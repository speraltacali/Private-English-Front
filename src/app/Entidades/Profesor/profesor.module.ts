import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ListadoComponent } from './Listado/listado.component';
import { MaterialModule } from 'src/app/module/material.module';
import { AddComponent } from 'src/app/Entidades/Profesor/Listado/add/add.component'
import { EditComponent } from './Listado/edit/edit.component';


@NgModule({
  declarations: [
     ListadoComponent,
     AddComponent,
     EditComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
