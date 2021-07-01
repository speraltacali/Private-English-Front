import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaItemRoutingModule } from './galeria-item-routing.module';
import { GaleriaItemComponent } from './galeria-item.component';
import { MaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [
    GaleriaItemComponent
  ],
  imports: [
    CommonModule,
    GaleriaItemRoutingModule,
    MaterialModule
  ],
  exports:[
    GaleriaItemComponent
  ],
  entryComponents:[GaleriaItemComponent]
})
export class GaleriaItemModule { }
