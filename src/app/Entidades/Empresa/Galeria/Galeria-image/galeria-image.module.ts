import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaImageRoutingModule } from './galeria-image-routing.module';
import { GaleriaImageComponent } from './galeria-image.component';
import { NgGaleriaFilesDirective } from '../Directives/galeria-image.directive';
import { MaterialModule } from 'src/app/module/material.module';

@NgModule({
  declarations: [GaleriaImageComponent,
    NgGaleriaFilesDirective,],
  imports: [
    CommonModule,
    GaleriaImageRoutingModule,
    MaterialModule
  ],
  exports : [
    GaleriaImageComponent
  ]
})
export class GaleriaImageModule { }
