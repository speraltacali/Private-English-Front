import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Persona } from 'src/app/Service/Persona/Model/persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url: string = 'https://localhost:44347/api/Persona';

  constructor(private _http: HttpClient)
   { 

   }


   public get() : Observable<any>{
      return this._http.get<Persona>(this.url);
   }

   public post(persona: Persona): Observable<any>{
      return this._http.post<Persona>(this.url,persona);
   }

}
