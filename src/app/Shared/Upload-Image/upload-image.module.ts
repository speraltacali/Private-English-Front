import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgGaleriaFilesDirective } from './Directives/ng-galeria-files.directive'
import { MaterialModule } from 'src/app/module/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UploadImageComponent, NgGaleriaFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class UploadImageModule { }
