import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: "Iron Man"},
      {id: 2, name: "Captain America"},
      {id: 3, name: "Thor"},
      {id: 4, name: "Hulk"},
      {id: 5, name: "Black Widow"},
      {id: 5, name: "Hawkeye"}
    ];

    return {heroes};
  }
}
