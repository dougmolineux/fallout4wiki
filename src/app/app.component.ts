import { Component } from '@angular/core';
import achievements from '../../data/achievements.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  namesOfTrophies = [];
  achievements = achievements;
  title = 'Fallout 4 Wiki Angular Learning';
  ngOnInit() {
    console.log("this.achievements", this.achievements);
    this.achievements.splice(0, 10);
    this.namesOfTrophies = this.achievements.filter( (value, index) => {
      if(!index) return true;
      return index % 6 === 0;
    });
    console.log("namesOfTrophies", this.namesOfTrophies.map( (t) => t.Field1 ));
  }
}
