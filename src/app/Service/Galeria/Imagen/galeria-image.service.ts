import { stringify } from '@angular/compiler/src/util';
import { Injectable, Input } from '@angular/core';
import { URL } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Galeria } from 'src/app/Shared/Models/galeria';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';
import { GaleriaService } from '../galeria.service';

@Injectable({
  providedIn: 'root'
})
export class GaleriaImageService {

  private MEDIA_STORAGE_PATH = 'galeria';
  public url : string;
  //galeria: Galeria = {titulo:'',imagen:'',estado:false,eliminado:false,empresaId:1};

  constructor(private storage: AngularFireStorage ) {
  }

   uploadImage(images:FileItem[] , galeria : Galeria): any{

    for(const item of images){

      item.uploadig = true;

      const filePath = this.generateFileName(item.name);
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, item.file);

      item.uploadPercent = task.percentageChanges();
      task.snapshotChanges()
      .pipe(
        finalize(()=>{
          item.downloadURL = fileRef.getDownloadURL();

          fileRef.getDownloadURL().subscribe((URL)=>{
            item.Url = URL;

            galeria.imagen = item.Url;
            this.insertarEnGaleria(galeria);
          });

          item.uploadig = false;
        })
      ).subscribe(); 

    }    

    return this.url;
  }

  private  generateFileName(name:string):string{
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }


  private insertarEnGaleria(galeria : Galeria){
    console.log(galeria);
  }
}
