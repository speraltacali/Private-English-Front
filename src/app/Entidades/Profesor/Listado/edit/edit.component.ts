import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/Service/Profesor/profesor.service';
import { Profesor } from 'src/app/Shared/Models/profesor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private service:EmpresaService){}

  profesor :Profesor;

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProfesorId(+id)
    .subscribe(data=> {
      this.profesor=data;
    })
  }

  Actualizar(profesor:Profesor){
    this.service.updateProfesor(profesor)
    .subscribe(data=>{
      this.profesor = data;
      alert("Se actualizo!");
      this.router.navigate(["listado"]);
    })
  }

}
