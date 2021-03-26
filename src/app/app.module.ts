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
import { GaleriaComponent } from './Entidades/Home/Galeria/galeria.component';


//Angular Material


@NgModule({
  declarations: [
    AppComponent
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
    routing     
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
