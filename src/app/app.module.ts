import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LessonsService} from './services/lessons.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AngularFireModule} from "angularfire2";
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routing";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from "./services/courses.service";
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDsnROVf193wQokPfMyWFJs_-sRV49MaXo",
  authDomain: "urban-8814b.firebaseapp.com",
  databaseURL: "https://urban-8814b.firebaseio.com",
  projectId: "urban-8814b",
  storageBucket: "urban-8814b.appspot.com",
  messagingSenderId: "654275372339"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent,
    TopMenuComponent,
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [LessonsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
