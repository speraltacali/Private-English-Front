import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './module/material.module';
import { routing } from './app.routing';
import { UsuarioModule } from './Entidades/Usuario/usuario.module';
import { AlumnoModule } from './Entidades/Alumno/alumno.module';
import { HomeModule } from './Entidades/Home/home.module';
import { JwtInterceptor } from './AUTH/security/jwt.interceptor';
import { ProfesorModule } from './Entidades/Profesor/profesor.module';

import { BUCKET } from '@angular/fire/storage';
import { UploadImageModule } from './Shared/Upload-Image/upload-image.module';
import { GaleriaImageModule } from './Entidades/Empresa/Galeria/Galeria-image/galeria-image.module';
import { GaleriaModule } from './Entidades/Empresa/Galeria/galeria.module';
import { HeaderModule } from './Shared/Header/header.module';

//Angular Material


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    AlumnoModule,
    HomeModule,
    ProfesorModule,
    UploadImageModule,
    routing,
    GaleriaImageModule,
    GaleriaModule,
    HeaderModule     
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide : BUCKET, useValue:'gs://private-english-9d21e.appspot.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
