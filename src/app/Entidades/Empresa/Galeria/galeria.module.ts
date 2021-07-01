import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria.component';
import { MaterialModule } from 'src/app/module/material.module';
import { GaleriaItemComponent } from './Galeria-Items/galeria-item.component';


@NgModule({
  declarations: [
    GaleriaComponent],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    MaterialModule
  ],
  exports :[
    GaleriaComponent
  ]
})
export class GaleriaModule { }
