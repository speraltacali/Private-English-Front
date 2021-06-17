import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Galeria } from 'src/app/Shared/Models/galeria';
import { GaleriaService } from '../../../../Service/Galeria/galeria.service';
Response

@Component({
  selector: 'app-galeria-item',
  templateUrl: './galeria-item.component.html',
  styleUrls: ['./galeria-item.component.css']
})
export class GaleriaItemComponent implements OnInit {

  galeria: Galeria = {titulo:'',imagen:'',estado:false,eliminado:false,empresaId:1};

  public filesToUpload: any = [];  

  constructor(public service: GaleriaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Add(){
    console.log(this.galeria);

    let formData = new FormData();
    formData.append("file",this.filesToUpload[0]);

    //this.galeria.imagen = formData;

    this.service.post(this.galeria).subscribe(response=>{
      if(response.exito ===1 ){
        console.log("Operacion Realizada con exito");
      }
      else{
        console.log("Operacion Rechazada");
      }
    });
  }


  funcionNueva(){
    let formData = new FormData();
    formData.append("file",this.filesToUpload[0]);
    console.log("formData: ",formData);
    console.log(this.filesToUpload);
  }

  fileEvent(fileInput:any){
    //this.filesToUpload = <any[]> fileInput.target.files;
    this.filesToUpload.push(fileInput.target.files[0]);
    
  }

}
