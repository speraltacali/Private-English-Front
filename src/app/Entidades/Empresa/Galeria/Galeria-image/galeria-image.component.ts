import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';
import { GaleriaImageService } from '../../../../Service/Galeria/Imagen/galeria-image.service';
import { Galeria } from 'src/app/Shared/Models/galeria';

@Component({
  selector: 'app-galeria-image',
  templateUrl: './galeria-image.component.html',
  styleUrls: ['./galeria-image.component.scss']
})
export class GaleriaImageComponent{

  files: FileItem[] = [];
  galeria: Galeria = {titulo:'',imagen:'',estado:false,eliminado:false,empresaId:1};
  isOverDrop = false;

  constructor(public _imagenService: GaleriaImageService ) { }


  CargarGaleria(){
    return this._imagenService.uploadImage(this.files, this.galeria);
  }

}
