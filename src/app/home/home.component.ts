import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLessons: Lesson[];
  filtered: Lesson[];

  constructor(private ls: LessonsService) { }

  ngOnInit() {
   this.ls.findAllLessons().subscribe(lessons => this.allLessons = this.filtered = lessons);
  }

  onSearch(val: string){
    this.filtered = this.allLessons.filter(lesson => lesson.description.includes(val));
  }

}
