import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';
import { GaleriaImageService } from '../../../../Service/Imagen/Galeria/galeria-image.service';

@Component({
  selector: 'app-galeria-image',
  templateUrl: './galeria-image.component.html',
  styleUrls: ['./galeria-image.component.scss']
})
export class GaleriaImageComponent implements OnInit {

  file: FileItem;
  isOverDrop = false;

  constructor(private readonly _galeriaService: GaleriaImageService) { }

  ngOnInit(): void {
  }

  CargarImagen():void{
    this._galeriaService.uploadImage(this.file);
  }

}
