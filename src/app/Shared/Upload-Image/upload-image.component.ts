import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Entidades/Alumno/Service/alumno.service';
import { FileItem } from './Models/file-item';
import { StorageService } from './Service/storage.service';

//import { UsuarioService } from 'src/app/Entidades/Alumno/Service'

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [StorageService],
})
export class UploadImageComponent{

  files:FileItem[] =[];
  isOverDrop = false;
  //private readonly storage: StorageService;

  constructor(public storageService: StorageService){

  }

  onUpload():void{
    
    console.log(this.files);
    this.storageService.uploadImage(this.files);
  }

}
