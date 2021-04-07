import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './Login/component/login.component';
import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsuarioRoutingModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
