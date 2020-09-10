import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators,FormsModule} from '@angular/forms'
import { Project } from './../Projects';
import {ProjectService} from './../Project-Service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  sessionForm:FormGroup;
  newProject:Project;
  constructor(private objProjectService:ProjectService) { }

  ngOnInit(): void {
    // this.sessionForm=this.fb.group({
    //   projectName:['',[Validators.required]],
    //   projectManager:['',Validators.required],
    //   percentCompleted:['']
    // })
    let projectName=new FormControl('',Validators.required);
    let projectManager=new FormControl('');
    let percentCompleted=new FormControl('');
    this.sessionForm=new FormGroup({
      projectName:projectName,
      projectManager:projectManager,
      percentCompleted:percentCompleted
    });
    console.log(this.sessionForm);
  }

  saveProject(input){
    console.log( input);
    console.log(this.sessionForm.value);
    this.objProjectService.saveProject(input);
  }
}
