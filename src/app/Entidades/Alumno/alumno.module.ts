import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { SolicitudComponent } from './Solicitud/component/solicitud.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../module/material.module';
import { EmpresaModule } from '../Empresa/empresa.module';


@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FormsModule,
    EmpresaModule,
    MaterialModule
  ]
})
export class AlumnoModule { }
