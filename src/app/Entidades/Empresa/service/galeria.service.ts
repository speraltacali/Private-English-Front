import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Models/response';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  url:string = "";

  constructor(
    private _http: HttpClient
  ) { }

  getGaleria(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  
}
