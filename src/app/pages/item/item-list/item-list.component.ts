import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  responseItem: any;

  constructor(private itensService: ItemService) { }

  ngOnInit(): void {
    this.itensService
      .getItemList()
      .subscribe((res: any) => { this.responseItem = res.availableItems})
  }

}
