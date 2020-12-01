import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, GlobalConstants } from 'src/environments/environment';
import { requestUser, User } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(environment.baseURL + environment.getUser + `${GlobalConstants.token}`);
  }

  addUser(request: requestUser): Observable<User>{

  return this.http.post<User>('http://hcs.dev4.com.br/api/Users/AddUser/b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f', request)

    //return this.http.post<User>(environment.baseURL + environment.postUser + `${GlobalConstants.token}`, request)
  }




}
