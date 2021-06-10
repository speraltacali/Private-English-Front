import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';

@Injectable({
  providedIn: 'root'
})
export class GaleriaImageService {

  private MEDIA_STORAGE_PATH = 'galeria';
  //private readonly storage: AngularFireStorage;

  constructor(private storage: AngularFireStorage) {
  }

  uploadImage(item:FileItem): any{

    console.log("Entro al metodo service ");

    item.uploadig = true;

    const filePath = this.generateFileName(item.name);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, item.file);

    item.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        item.downloadURL = fileRef.getDownloadURL();
        item.uploadig = false;
      })
    ).subscribe();

    return item.downloadURL;

    console.log("Verificar si subio imagen");
  }

  private  generateFileName(name:string):string{
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }
}
