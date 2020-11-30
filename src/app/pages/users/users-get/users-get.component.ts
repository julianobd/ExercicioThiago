import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.scss']
})
export class UsersGetComponent implements OnInit {

  responseUser: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService
      .getUser()
      .subscribe(res => { this.responseUser = res })
  }

}
