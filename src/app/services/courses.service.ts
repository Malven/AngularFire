import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Course} from "../shared/model/course";
import {AngularFireDatabase} from "angularfire2";
import {Lesson} from "../shared/model/lesson";

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses').map(Course.fromJsonArray);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map(results => results[0]);
  }

  findLessonKeysPerCourseUrl(courseUrl: string): Observable<string[]> {
    return this.findCourseByUrl(courseUrl)
      .switchMap(course => this.db.list('lessonsPerCourse/' + course.$key))
      .map(lspc => lspc.map(lpc => lpc.$key));
  }

  findLessonsForCourse(courseUrl: string): Observable<Lesson[]>{
    return this.findLessonKeysPerCourseUrl(courseUrl)
      .map(lspc => lspc.map(lessonKey => this.db.object('lessons/' + lessonKey)))
      .flatMap(fbojs => Observable.combineLatest(fbojs));
  }
}
