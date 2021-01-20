import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './components/home/home.component';
import {  Routes , RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { SolicitudComponent } from './components/alumno/solicitud/solicitud.component';
import { MaterialModule } from './module/material.module';

//Angular Material


const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch: 'full'},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'home', component: HomeComponent} ,
  {path: 'usuario', component: UsuarioComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'empleado', component: EmpleadoComponent}
];

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
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
