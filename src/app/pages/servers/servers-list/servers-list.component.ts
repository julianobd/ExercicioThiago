import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/core/services/servers.service';
import { GlobalConstants } from 'src/environments/environment';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit {

  responseServers: any;

  idServer: any;

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.serversService
      .getServerList()
      .subscribe((res: any) => {this.responseServers = res;
        this.idServer = res;

        console.log("Aqui",this.idServer);
        console.log(this.responseServers);
        
        
      })
  }

  selectServer(id: any, name: any) {
    GlobalConstants.selectedServer = id;
    GlobalConstants.selectedServerName = name;
  }

}
