import { Component, OnInit } from '@angular/core';
import { RequestJobs } from 'src/app/core/model/jobs';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-jobs-add',
  templateUrl: './jobs-add.component.html',
  styleUrls: ['./jobs-add.component.scss']
})
export class JobsAddComponent implements OnInit {

  request: RequestJobs = {
    name: '',
    color: '',
    canHeal: false,
    canArrest: false,
    canDoMarriage: false,
    isDefault: false,
    requirementXp: 0,
    publicJob: false
  }

  responseCreateJobs: any;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
  }

  addJobs(){
    this.jobsService
      .createJobs(this.request)
      .subscribe(jobs => { this.responseCreateJobs = jobs 
        alert("Trabalho criado com sucesso!")        
      })
  }

}
