import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImageComponent } from './upload-image.component';

const routes: Routes = [
  {path: 'upload-image' , component: UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadImageRoutingModule { }
