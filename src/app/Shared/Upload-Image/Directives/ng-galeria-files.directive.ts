import { Directive, Input, Output ,EventEmitter, HostListener } from '@angular/core';
import { FileItem } from '../Models/file-item';
import { ImageValidator } from '../Helpers/imageValidator';


@Directive({
  selector: '[appNgGaleriaFiles]'
})
export class NgGaleriaFilesDirective extends ImageValidator{

  @Input()files:FileItem[] = [];
  @Output()mouseOver: EventEmitter<boolean> = new EventEmitter();


  @HostListener('dragover', ['$event'])
  onDragEnter(event:any){
    this.preventAndStop(event);
    this.mouseOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(){
    this.mouseOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  onDrop(event:any){
    const dataTrasnfer = this.getDataTrasnfer(event);
    if(!dataTrasnfer){
      return;
    }

    this.preventAndStop(event);
    this.extractFile(dataTrasnfer.files);
    this.mouseOver.emit(false); 
  }


  private getDataTrasnfer(event:any){
    return event.dataTrasnfer
    ? event.dataTrasnfer
    : event.originalEvent.dataTrasnfer;
  }

  private extractFile(fileList:FileList):void{
    for(const property  in Object.getOwnPropertyNames(fileList)){
      const tempFile = fileList[property];
      if(this.canBeUploaded(tempFile)){
        const newFile = new FileItem(tempFile);
        this.files.push(newFile);
      }
    }
  }

  private canBeUploaded(file:File):boolean{
    if(!this.ckeckDropped(file.name, this.files) &&
    this.validateType(file.type)){
      return true;
    }
    else{
      return false;
    }
  }

  private preventAndStop(event:any):void{
    event.preventDefult();
    event.StopPropagation();
  }

}
