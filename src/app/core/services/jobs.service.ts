import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, GlobalConstants } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get(environment.baseURL + environment.getJobs + `${GlobalConstants.token}` + '/' + `${GlobalConstants.serverId}`)
  }
  
}
