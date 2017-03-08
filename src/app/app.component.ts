import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: string;
}


const HEROES: Hero[] = [
  {id: 1, name: "Iron Man"},
  {id: 2, name: "Captain America"},
  {id: 3, name: "Thor"},
  {id: 4, name: "Hulk"},
  {id: 5, name: "Black Widow"},
  {id: 5, name: "Hawkeye"}
];


@Component({
  selector: 'my-app',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
})
export class AppComponent {
  heroes = HEROES
  title = "Tour of Heros";
  hero: Hero = {
    id: 1,
    name: "Iron Man"
  };
}
