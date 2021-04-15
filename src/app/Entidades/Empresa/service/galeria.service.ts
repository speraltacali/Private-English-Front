import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Models/response';
import { Galeria } from 'src/app/Shared/Models/galeria';


const httpOption = {
  headers: new HttpHeaders({
      'Contend-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  url:string = "https://localhost:44347/api/Galeria";

  constructor(
    private _http: HttpClient
  ) { }

  getGaleria(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  public post(galeria: Galeria): Observable<Response>{
    return this._http.post<Response>(this.url, (galeria), httpOption);
    
  }
  
}
