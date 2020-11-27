import { Component, OnInit } from '@angular/core';
import { AvatarListService } from 'src/app/core/services/avatar.service';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss']
})
export class AvatarListComponent implements OnInit {
  
  responseAvatar: any;

  constructor(
    private avatarService: AvatarListService
    ) { }
    
    ngOnInit(): void {
      this.avatarService
      .getAvatar()
      .subscribe(res => { this.responseAvatar= res; }) 
    }
}