import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PeopleService } from "../people.service";
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  person: Person;
  sub:any;

  constructor(private route: ActivatedRoute,
              private peopleService: PeopleService,
              private router: Router) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
    let link = ['/persons'];
    this.router.navigate(link);
  }

  savePersonDetails(){
      console.log(`saved!!! ${JSON.stringify(this.person)}`);
      this.peopleService.save(this.person);
  }

  /* 
  //alternatively use:
  gotoPeoplesList(){
      window.history.back();
  }
  */

}
