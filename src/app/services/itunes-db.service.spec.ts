import { TestBed } from '@angular/core/testing';

import { iTunesDbService } from './itunes-db.service';

describe('iTunesDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: iTunesDbService = TestBed.get(iTunesDbService);
    expect(service).toBeTruthy();
  });
});
