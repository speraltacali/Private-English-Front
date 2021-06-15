import { stringify } from '@angular/compiler/src/util';
import { Injectable, Input } from '@angular/core';
import { URL } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FileItem } from 'src/app/Shared/Upload-Image/Models/file-item';

@Injectable({
  providedIn: 'root'
})
export class GaleriaImageService {

  private MEDIA_STORAGE_PATH = 'galeria';
  private url : string;

  constructor(private storage: AngularFireStorage) {
  }

  uploadImage(images:FileItem[]): any{

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
          item.uploadig = false;
        })
      ).subscribe();

        item.downloadURL.subscribe((URL)=>{
          this.url = URL;
        });

      console.log(this.url);
    }
  }

  private  generateFileName(name:string):string{
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }
}
