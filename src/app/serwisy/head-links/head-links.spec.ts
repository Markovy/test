import { TestBed } from '@angular/core/testing';

import { HeadLinks } from './head-links';

describe('HeadLinks', () => {
  let service: HeadLinks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadLinks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
