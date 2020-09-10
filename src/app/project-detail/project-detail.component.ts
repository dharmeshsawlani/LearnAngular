import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  id:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id =  this.route.snapshot.params['id'];
  }

}
