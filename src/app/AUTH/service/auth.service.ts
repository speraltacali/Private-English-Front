import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from 'src/app/Shared/Models/response';
import { Login } from 'src/app/Shared/Models/usuario';
import { map } from 'rxjs/operators';
import { User } from '../../Shared/Models/user';

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

    private usuarioSubject: BehaviorSubject<User>

    public get usuarioData(): User{
        return this.usuarioSubject.value;
    }

    constructor(private _http: HttpClient){
        this.usuarioSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('usuario')));
    }

    login(usuario: Login): Observable<Response> {
        return this._http.post<Response>(this.url , (usuario) , httpOption)
        .pipe(
            map(res => {
                if(res.exito === 1){
                    const user : User = res.data;
                    localStorage.setItem('usuario', JSON.stringify(user));
                    this.usuarioSubject.next(user);
                }
                return res;
            })
        );
    }

    logout(){
        localStorage.removeItem('usuario');
        this.usuarioSubject.next(null);
    }
} 