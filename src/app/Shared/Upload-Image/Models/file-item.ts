import { Observable } from "rxjs";

export class FileItem{
    public name : string;
    public uploadig: boolean;
    public uploadPercent: Observable<number>;
    public downloadURL: Observable<string>;


    constructor(public file: File = file ){
        this.name = file.name;
        this.uploadig = false;
    }

}