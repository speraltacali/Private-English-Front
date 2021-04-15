import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Galeria } from 'src/app/Shared/Models/galeria';
import { GaleriaService } from '../../../service/galeria.service';
Response

@Component({
  selector: 'app-galeria-item',
  templateUrl: './galeria-item.component.html',
  styleUrls: ['./galeria-item.component.css']
})
export class GaleriaItemComponent implements OnInit {

  galeria: Galeria = {titulo:'',imagen:null,estado:false,eliminado:false,empresaId:1};

  public filesToUpload: any[];  

  constructor(public service: GaleriaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Add(){

    this.galeria.imagen = this.filesToUpload;
    console.log(this.galeria);

    this.service.post(this.galeria).subscribe(response=>{
      if(response.exito ===1 ){
        console.log("Operacion Realizada con exito");
      }
      else{
        console.log("Operacion Rechazada");
      }
    });
  }

  fileEvent(fileInput:any){
    this.filesToUpload = <any[]> fileInput.target.files;
  }

}
