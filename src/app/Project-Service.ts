import { Injectable } from '@angular/core';
import {Project} from './Projects';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ProjectService {
   
    values : any;

    /**
     *
     */
    constructor(private http: HttpClient ) {
        
    }

    getAllProjects() : Project[]{

        this.http.get("http://localhost:5000/project").subscribe(response => {
            this.values=  response;
        })

        return projectsArray;
    }
    
    saveProject(input:Project){
        projectsArray.push(input);
    }
}

const projectsArray:Project[]=[
    {
        projectName:"APM",
        projectManager:"XYZ",
        percentCompleted:50
    },
    {
        projectName:"AIE",
        projectManager:"ABC",
        percentCompleted:60
    },
    {
        projectName:"Unity",
        projectManager:"PQR",
        percentCompleted:30
    }
];