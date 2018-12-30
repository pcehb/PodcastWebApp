import { TestBed } from '@angular/core/testing';

import { FilmDbService } from './film-db.service';

describe('FilmDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmDbService = TestBed.get(FilmDbService);
    expect(service).toBeTruthy();
  });
});
