import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Models/response';
import { Usuario } from 'src/app/Shared/Models/user';

const httpOption = {
    headers: new HttpHeaders({
        'Contend-Type':'application/json'
    })
};


@Injectable({
    providedIn:"root"
})
export class authService {

    url : string = "https://localhost:44347/api/Usuario/login";

    constructor(private _http: HttpClient){

    }

    login(usuario: Usuario): Observable<Response> {
        return this._http.post<Response>(this.url , (usuario) , httpOption);
    }
} 