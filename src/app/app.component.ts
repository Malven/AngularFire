import { Component } from '@angular/core';
import {PopulateDb} from "../../populate-db";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onPopulate(){
    PopulateDb.Run();
  }
}
