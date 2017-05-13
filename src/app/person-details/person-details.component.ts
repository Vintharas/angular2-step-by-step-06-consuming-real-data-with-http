import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PeopleService } from "../people.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  template: `
  <section *ngIf="person">
    <h2>You selected:  {{person.name}}</h2>
    <h3>Description</h3>
    <p>
       {{person.name}} weights {{person.weight}} and is {{person.height}} tall.
    </p>
  </section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub:any;

  constructor(private route:ActivatedRoute,
              private peopleService:PeopleService) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
