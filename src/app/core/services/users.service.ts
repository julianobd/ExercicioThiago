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
    return this.http.get(environment.baseURL + environment.getUser + `${window.localStorage.getItem('token')}`);
  }

  addUser(request: requestUser): Observable<User>{

  return this.http.post<User>(environment.baseURL + 'Users/AddUser/' + `${window.localStorage.getItem('token')}`, request)

  }




}
