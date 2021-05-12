import { Component, OnInit } from '@angular/core';
import { FileItem } from './Models/file-item';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  files:FileItem[] =[];
  isOverDrop = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(){

  }

}
