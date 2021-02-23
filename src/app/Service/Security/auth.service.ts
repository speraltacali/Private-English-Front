import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/components/Models/response';

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

    login(usuario: string , password: string): Observable<Response> {
        return this._http.post<Response>(this.url , (usuario , password) , httpOption);
    }
} 