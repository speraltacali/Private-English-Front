import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private apiUsuario: UsuarioService 
  ) {
      apiUsuario.getUsuario().subscribe(response =>
        {
          console.log(response);
        })

   }

  ngOnInit(): void {
  }

}
