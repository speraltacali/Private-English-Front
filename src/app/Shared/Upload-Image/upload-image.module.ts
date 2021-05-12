import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgGaleriaFilesDirective } from './Directives/ng-galeria-files.directive'
import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [UploadImageComponent, NgGaleriaFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    MaterialModule
  ]
})
export class UploadImageModule { }
