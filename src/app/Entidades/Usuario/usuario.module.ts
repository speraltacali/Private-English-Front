import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './Login/component/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
