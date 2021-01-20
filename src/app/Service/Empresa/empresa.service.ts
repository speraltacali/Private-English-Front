import { Response } from 'src/app/components/Models/response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from , Observable } from 'rxjs';
import { Empresa } from 'src/app/components/Models/empresa';

const httpOption ={
    headers: new HttpHeaders({
        'Contend-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url:string = 'https://localhost:44347/api/Usuario';

  constructor(
    private _http: HttpClient
  ) { }

  getEmpresa(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  //add(Empresa: Empresa):Observable<Response>{
    
  //}
}
