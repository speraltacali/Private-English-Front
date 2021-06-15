import { Directive, Input, Output ,EventEmitter, HostListener } from '@angular/core';
import { ImageValidator } from '../../../../Shared/Upload-Image/Helpers/imageValidator';
import { FileItem } from '../../../../Shared/Upload-Image/Models/file-item';



@Directive({
    selector: '[appNgGaleriaFiles]',
  })
  export class NgGaleriaFilesDirective extends ImageValidator{
  
    @Input() files: FileItem[] = [];
    @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();
  
  
    //Entra al mouse al contenedor
    @HostListener('dragover', ['$event'])
    onDragEnter(event: any) {
      this.preventAndStop(event);
      this.mouseOver.emit(true);
    }
  
    //Sale al mouse al contenedor
    @HostListener('dragleave', ['$event'])
    onDragLeave() {
      this.mouseOver.emit(false);
    }
  
    
    @HostListener('drop', ['$event'])
    onDrop(event: any) {
  
      const dataTransfer = this.getDataTransfer(event);
      if (!dataTransfer) {
        return;
      }
  
      this.preventAndStop(event);
      this.extractFiles(dataTransfer.files);
      this.mouseOver.emit(false);
    }
  
    private getDataTransfer(event: any) {
  
      console.log(event.dataTransfer);
  
      return event.dataTransfer
        ? event.dataTransfer
        : event.originalEvent.dataTransfer;
    }
  
    private extractFiles(fileList: FileList): void {
  
      for (const property in Object.getOwnPropertyNames(fileList)) {
        const tempFile = fileList[property];
        if (this.canBeUploaded(tempFile)) {
          const newFile = new FileItem(tempFile);
  
          this.files.pop();
  
          this.files.push(newFile);
        }
      }
    }
  
    private canBeUploaded(file: File): boolean {
      if (
        !this.ckeckDropped(file.name, this.files) &&
        this.validateType(file.type)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    private preventAndStop(event: any): void {
      event.preventDefault();
      event.stopPropagation();
    }
  }