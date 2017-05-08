import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService]
    });
  });

  it('should ...', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
