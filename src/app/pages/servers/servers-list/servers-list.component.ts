import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/core/services/servers.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  responseServers: any;

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.serversService
      .getServerList()
      .subscribe(res => {this.responseServers = res;  console.log(this.responseServers);
      })
  }

}
