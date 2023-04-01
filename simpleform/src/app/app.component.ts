import { Component } from '@angular/core';
import { Activity } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  processNewActivity(activity: Activity) {
    console.info('>>>>Activity programs registered', activity)
  }

}
