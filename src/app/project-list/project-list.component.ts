import { Component, OnInit } from '@angular/core';
import {Project} from './../Projects';
import {ProjectService} from './../Project-Service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // constructor(private objProjectService:ProjectService) { }

  values :any;

  constructor(private objProjectService:HttpClient) { }

  arrProject:Project[]=[];
  ngOnInit(): void {
    
    this.objProjectService.get("http://localhost:5000/project").subscribe(response => {
      this.values=  response;
    })

    //this.arrProject=this.objProjectService.getAllProjects();
  }

}
