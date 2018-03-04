import { Component } from '@angular/core';
import achievements from '../../data/achievements.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  achievements = achievements
  title = 'Fallout 4 Wiki Angular Learning';
  ngOnInit() {
    console.log("achievements", achievements);
    this.achievements.splice(0, 10);
  }
}
