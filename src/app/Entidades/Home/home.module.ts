import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './nav-bar/home.component';
import { EmpresaModule } from '../Empresa/empresa.module';

import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EmpresaModule,
    MaterialModule
  ]
})
export class HomeModule { }
