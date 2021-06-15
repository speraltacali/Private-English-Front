import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';
import { GaleriaImageService } from '../../../../Service/Galeria/Imagen/galeria-image.service';
import { GaleriaService } from '../../../../Service/Galeria/galeria.service';
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

  constructor(private readonly _imagenService: GaleriaImageService , private _galeriaService: GaleriaService ) { }


  CargarImagen():void{ 

    this.galeria.imagen = this._imagenService.uploadImage(this.files);

    console.log(this.galeria);

    this._galeriaService.post(this.galeria);
  }

}
