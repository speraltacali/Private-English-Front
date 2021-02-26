import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './component/empresa.component';
import { MaterialModule } from '../../module/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../Home/nav-bar/home.component';




@NgModule({
  declarations: [EmpresaComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    EmpresaComponent
  ]
})
export class EmpresaModule { }
