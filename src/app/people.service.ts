import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PeopleService {
  constructor() { }

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}
