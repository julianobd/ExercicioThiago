import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, GlobalConstants } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(environment.baseURL + environment.getUser + `${GlobalConstants.token}`);
  }

}
