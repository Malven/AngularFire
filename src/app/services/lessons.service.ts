import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Lesson} from "../shared/model/lesson";
import {AngularFire} from "angularfire2";

@Injectable()
export class LessonsService {

  constructor(private af: AngularFire) { }

  findAllLessons(): Observable<Lesson[]> {
    return this.af.database.list('lessons').map(Lesson.fromJsonList);
  }
}
