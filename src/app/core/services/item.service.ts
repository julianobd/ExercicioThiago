import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, GlobalConstants } from 'src/environments/environment';
import { Item, RequestItem } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  userToken: string = 'b025d2a9-d4c2-4f43-ae44-7d7fdec96f52-b92bd7ce-ec93-4b10-a916-8beda4181f3f';

  serverId: string = '00c0808b-cb1c-4802-92dd-1500833bc264';

  constructor(
    private http: HttpClient
    ) { }

   getItemList(){
     return this.http.get(environment.baseURL + 'Item/ListServerWithItems/' + `${this.userToken}` + '/' + `${this.serverId}`);
   }

   createItem(request: RequestItem): Observable<Item>{
    
    request.isInitial = JSON.parse(request.isInitial);
    request.isVirtual = JSON.parse(request.isVirtual);

    return this.http.post<Item>(environment.baseURL + environment.postItem + `${GlobalConstants.token}` + '/' + `${GlobalConstants.serverId}`, request)

  }


}
