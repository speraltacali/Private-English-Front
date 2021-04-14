import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/Service/Profesor/profesor.service';
import { Profesor } from 'src/app/Shared/Models/profesor';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  Profesores:Profesor[];
  
  constructor(private service:EmpresaService, private router:Router) { }

  ngOnInit(): void {

    this.service.getProfesores()
    .subscribe(data=>{this.Profesores = data;})

  }

  Listar(){
    this.router.navigate(["listado"]);
  }

}
