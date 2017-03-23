import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  
  constructor(private http: Http) {}
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const heroUrl = `${this.heroesUrl}/${id}`;
    
    return this.http.get(heroUrl)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
