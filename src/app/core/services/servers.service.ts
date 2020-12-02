import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  
  userToken: string = 'f3ff1d27-89a3-4418-b58d-a0fb3c33371a-e47c3257-83dc-4abc-9a8f-126e3902c0f0';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(
    private http: HttpClient,
    private accountService: AccountService
    ) { }

   getServerList(){
     return this.http.get(environment.baseURL + environment.getServersList + `${window.localStorage.getItem('token')}` );
   }


  // getAuthorizationToken(){
  //   const token = window.localStorage.getItem('token');
  //   return token
  // }

  

}
