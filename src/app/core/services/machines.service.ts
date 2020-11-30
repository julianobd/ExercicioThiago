import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, GlobalConstants } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(private http: HttpClient) { }

  getMachines(){
    return this.http
      .get(environment.baseURL + environment.getMachines + `${GlobalConstants.token}` + '/' + `${GlobalConstants.serverId}`);
  }


}
