import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SolicitudComponent } from './components/alumno/solicitud/solicitud.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './module/material.module';
import { routing } from './app.routing';

//Angular Material


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    UsuarioComponent,
    SolicitudComponent,
    EmpleadoComponent    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
