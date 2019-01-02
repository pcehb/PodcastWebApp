import { TestBed } from '@angular/core/testing';

import { iTunesService } from './itunes-db.service';

describe('iTunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: iTunesService = TestBed.get(iTunesService);
    expect(service).toBeTruthy();
  });
});
