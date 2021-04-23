import { Response } from 'src/app/Shared/Models/response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from , Observable } from 'rxjs';
import { Profesor } from 'src/app/Shared/Models/profesor';

const httpOption ={
    headers: new HttpHeaders({
        'Contend-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url:string = 'https://localhost:44347/api/profesor';

  constructor(
    private _http: HttpClient
  ) { }

  getProfesores(){
    return this._http.get<Profesor[]>(this.url);
  }

  getEmpresa(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  createProfesor(profesor:Profesor){
    return this._http.post<Profesor>(this.url,profesor);
  }
  //add(Empresa: Empresa):Observable<Response>{
    
  //}
  getProfesorId(id:number){
    return this._http.post<Profesor>(this.url,+"/"+id);
  }

  updateProfesor(profesor:Profesor){
    return this._http.put<Profesor>(this.url+"/"+profesor.id,profesor);
  }
}
