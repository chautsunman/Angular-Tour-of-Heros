import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{name}} details!</h2>
  `,
})
export class AppComponent  {
  title = "Tour of Heros";
  name = "Iron Man";
}
