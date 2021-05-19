
import { FileItem } from '../Models/file-item';

export class ImageValidator{
    private acceptType = ['image/jpeg' , 'image/png'];

    validateType(fileType: string): boolean{

        return fileType === '' || fileType === undefined
        ? false
        : this.acceptType.includes(fileType); 
    }

    ckeckDropped(fileName: string , files: FileItem[]):boolean{
        for(const file of files ){
            if(file.name === fileName){
                return true
            }
            else{
                return false;
            }
        }
    }
}