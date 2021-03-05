import { Injectable } from '@angular/core'; 
import { Response } from 'src/app/Shared/Models/response';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 


const httpOption ={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    url: string = "";
    
    constructor(
        private _http: HttpClient
    ){}

    AgregarUsuario(){

    }

    ModificarUsuario(){

    }

    EliminarUsuario(){

    }

    BloquearUsuario(){

    }

    ObtenerUsuario(){
        
    }

}