import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './component/empresa.component';
import { MaterialModule } from '../../module/material.module';
import { GaleriaComponent } from './Galeria/galeria.component';
import { GaleriaItemComponent } from './Galeria/Galeria-Items/galeria-item/galeria-item.component';




@NgModule({
  declarations: [
    EmpresaComponent,
    GaleriaComponent,
    GaleriaItemComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule
  ],
  exports:[
    EmpresaComponent
  ],
  entryComponents:[GaleriaItemComponent]
})
export class EmpresaModule { }
