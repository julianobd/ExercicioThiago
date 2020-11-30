import { Component, OnInit } from '@angular/core';
import { MachinesService } from 'src/app/core/services/machines.service';

@Component({
  selector: 'app-machines-get',
  templateUrl: './machines-get.component.html',
  styleUrls: ['./machines-get.component.scss']
})
export class MachinesGetComponent implements OnInit {

  responseMachines: any;

  constructor(private machinesService: MachinesService) { }

  ngOnInit(): void {
    this.machinesService
      .getMachines()
      .subscribe(res => {this.responseMachines = res
        console.log("Aqui2",this.responseMachines);
        
      })
  }

}
