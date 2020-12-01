import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, GlobalConstants } from 'src/environments/environment';
import { Jobs, RequestJobs } from '../model/jobs';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private http: HttpClient,
    ) { }

  getJobs(){
    return this.http.get(environment.baseURL + environment.getJobs + `${GlobalConstants.token}` + '/' + `${GlobalConstants.serverId}`)
  }
  
  createJobs(request: RequestJobs): Observable<Jobs>{
    
    request.canArrest = JSON.parse(request.canArrest);
    request.canHeal = JSON.parse(request.canHeal);
    request.canDoMarriage = JSON.parse(request.canDoMarriage);
    request.isDefault = JSON.parse(request.isDefault);
    request.publicJob = JSON.parse(request.publicJob);

    //return this.http.post<Jobs>(environment.baseURL + environment.postJobs + `${GlobalConstants.token}` + '/' + `${GlobalConstants.serverId}`, request)
    return this.http.post<Jobs>('http://hcs.dev4.com.br/api/Jobs/AddJob/b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f/00c0808b-cb1c-4802-92dd-1500833bc264', request)

  }




}
