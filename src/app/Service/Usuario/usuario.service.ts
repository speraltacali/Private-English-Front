import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/components/Models/response';
import { Usuario } from 'src/app/components/Models/model';

const httpOption ={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;
  private url: string = 'https://localhost:44347/api/Usuario';

  constructor(
    private _http: HttpClient
  ) { 
      this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }

  getUsuario(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
 
  public get(){
    return this._http.get(this.url,{headers: this.headers})
  }

  public post(user: Usuario): Observable<any>{
    return this._http.post<Usuario>(this.url,user);
  }

  
}
