import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgGaleriaFilesDirective } from './Directives/ng-galeria-files.directive'
import { MaterialModule } from 'src/app/module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './Service/storage.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { GaleriaComponent } from './Componentes/Galeria/galeria.component';



@NgModule({
  declarations: [UploadImageComponent,
      NgGaleriaFilesDirective,
      GaleriaComponent,],
  imports: [
    CommonModule,
    UploadImageRoutingModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ]
})
export class UploadImageModule { }
