import { Component, OnInit } from '@angular/core';
import { requestUser } from 'src/app/core/model/users';
import { UsersService } from 'src/app/core/services/users.service';
import { GlobalConstants } from 'src/environments/environment';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  request: requestUser = {
    name: '',
    email: '',
    password: '',
    permission: 0,
  }

  responseUser: any;

  server: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {  
  }

  addUser(){
    this.userService
      .addUser(this.request)
      .subscribe( user => {this.responseUser = user;
        this.server = GlobalConstants.serverId
        alert("Usuario adicionado com sucesso!")
      })
  }

}
