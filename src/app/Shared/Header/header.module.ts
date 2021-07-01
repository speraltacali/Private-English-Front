import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from 'src/app/module/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
