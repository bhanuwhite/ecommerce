import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  rootUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  registerUser(data: string){ 
    return this.http.post(this.rootUrl + "users",data)
  }
}
