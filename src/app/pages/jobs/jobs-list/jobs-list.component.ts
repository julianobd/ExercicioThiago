import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  responseJobs: any;

  constructor(private jobsServices: JobsService) { }

  ngOnInit(): void {
    this.jobsServices
    .getJobs()
    .subscribe(res => { this.responseJobs = res 
    console.log("Aqui",this.responseJobs);
    
    })
  }

}
