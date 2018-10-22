import { Component } from '@angular/core';
//Model Task class with constructor was moved so import here (separation of concerns)
import { Task } from './models/task.model';

//annotation - code inside @Component - how component appears(a decorator)
//https://toddmotto.com/angular-decorators
//@Component - where component goes on the page (selector)
//how component should look (templateUrl)
//how comonent should be styled (styleUrls)
@Component({
//selector - how the component should be rendered - index.html special tag"<app-root></app-root>"
//can change tag name to anything - must match name here and in index
  selector: 'app-root',
//templateUrl - the HTML that will be placed inside the app-root tag above
//specifically - what's written in app.component.html
  templateUrl: './app.component.html',
//styleUrls - array can link multiple stylesheets
  styleUrls: ['./app.component.css']
})

//class declaration - code inside AppComponent class - how component behaves
//defines component's behavior - TypeScript goes here
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
//this keyword - reference variables already declared
//currentFocus and currentTime are properties in the class
//must use this keyword to reference other variables inside the same class.
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
//firstTask could be object literal here - firstTask { description: "string" }
//firstTask "Task" is now a valid datatype since class Task was imported such as
//firstTask: Task = new Task("Finish the homework");
//now replaced with a tasks property that contains an array of Task objects
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}

//The Model - moved to models/task.model.ts
// export class Task {
//   public done: boolean = false;
//   constructor(public description: string) { }
// }
//Moved because components only concerned with how app looks and behaves, not how data is handled.





// CODE WITHOUT NOTES
// import { Component } from '@angular/core';
// import { Task } from './models/task.model';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   currentFocus: string = 'Angular Homework';
//   currentTime = new Date();
//   month: number = this.currentTime.getMonth() +1;
//   day: number = this.currentTime.getDate();
//   year: number = this.currentTime.getFullYear();
//   tasks: Task[] = [
//     new Task('Finish weekend Angular homework for Epicodus course'),
//     new Task('Begin brainstorming possible JavaScript group projects'),
//     new Task('Add README file to last few Angular repos on GitHub')
//   ];
// }
