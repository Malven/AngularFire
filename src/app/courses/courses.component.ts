import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs/Rx";
import {Course} from "../shared/model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course$: Observable<Course[]>;

  constructor(private cs: CoursesService) { }

  ngOnInit() {
    this.course$ = this.cs.findAllCourses();
  }
}
