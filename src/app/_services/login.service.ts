import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private http:HttpClient) { }

  login(login:Login):Observable<Login>
  {    
    return this.http.post<Login>('http://localhost:8080/login',login);
     //return this.http.get<Login>('http://localhost:8080/login');
     
  }
}
