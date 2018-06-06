import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-java-course',
  templateUrl: './java-course.component.html',
  styleUrls: ['./java-course.component.css']
})
export class JavaCourseComponent implements OnInit {

  constructor(private contents: ContentsService) {
  
   }

   content = this.contents.javaCourse;

  ngOnInit() {
  }

}
