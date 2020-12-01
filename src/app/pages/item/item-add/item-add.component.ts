import { Component, OnInit } from '@angular/core';
import { RequestItem } from 'src/app/core/model/item';
import { ItemService } from 'src/app/core/services/item.service';
import { GlobalConstants } from 'src/environments/environment';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  request: RequestItem = {
    id: '',
    name: '',
    imageId: '',
    health: 0,
    vest: 0,
    experience: 0,
    hungry: 0,
    money: 0,
    statusPoint: 0,
    isInitial: false,
    quantityInitial: 0,
    isVirtual: false
  }

  responseItem: any;

  server:  any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.server = GlobalConstants.serverId;
  }

  addItem(){
    this.itemService
    .createItem(this.request)
    .subscribe( item => { this.responseItem = item; 
      this.server = GlobalConstants.serverId;
      alert("Item criado com sucesso!");      
    })
  }

}
