import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './component/empresa.component';
import { MaterialModule } from '../../module/material.module';
import { GaleriaComponent } from './Galeria/galeria.component';
import { GaleriaItemComponent } from './Galeria/Galeria-Items/galeria-item.component';
import { NovedadesComponent } from './Novedades/novedades.component';
import { GaleriaImageComponent } from './Galeria/Galeria-image/galeria-image.component';
import { NgGaleriaFilesDirective } from './Galeria/Directives/galeria-image.directive';




@NgModule({
  declarations: [
    EmpresaComponent,
    NovedadesComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule,
  ],
  exports:[
    EmpresaComponent
  ]
  
})
export class EmpresaModule { }
