import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  //project: Project[] = [];
  constructor(private pservice:ProjectService) { }

  ngOnInit(){
   // this.pservice.getProject().subscribe((data:Project[])=>{
     // this.project=data;
      
    
  
  }

}
