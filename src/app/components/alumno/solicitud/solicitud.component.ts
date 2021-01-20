import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { Usuario } from 'src/app/components/Models/model';
import { Persona } from 'src/app/Service/Persona/Model/persona';
import { PersonaService } from '../../../Service/Persona/persona.service';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  public userList: Array<any>;
  userInfo: Usuario = {id:0 , user:'' , password:'' , activo: false , eliminado: false};
  personaDto: Persona = {id:0 , nombre: '' , apellido:'',dni: '' , cuil: '' , domicilio:'' ,fechaNacimiento: null , sexo:1, email:''} 

  constructor(public _servicio: PersonaService) {
   }

  ngOnInit() {
    //this._servicio.get().subscribe((data: any)=> this.userList= data);
  } 

  public Post(){
    console.log(this.personaDto);
    this._servicio.post(this.personaDto).subscribe((response: Persona) => console.log(response));
  }

}
