import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/Service/Profesor/profesor.service';
import { Profesor } from 'src/app/Shared/Models/profesor';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:EmpresaService) { }

  ngOnInit() {
  }

  profesorAux:Profesor= {id:0 , nombre: '' , apellido:'',dni: '' , cuil: '' , domicilio:'' ,fechaNacimiento: null , sexo:1, email:''} 

  GuardarProfesor(profesor:Profesor){
    this.service.createProfesor(profesor)
    .subscribe(data => {
      alert("Se agrego exitosamente!");
      this.router.navigate(["listado"]);
    })
  }

}
