import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarListService {


  userToken: string = 'b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(
    private http: HttpClient
    ) { }

   getAvatar(){
     return this.http.get(environment.baseURL + 'Avatar/ListAvatars/' + `${this.userToken}` + '/' + `${this.serverId}`);
   }


}
