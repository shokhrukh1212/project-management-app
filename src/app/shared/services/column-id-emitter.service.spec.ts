import { TestBed } from '@angular/core/testing';

import { ColumnIdEmitterService } from './column-id-emitter.service';

describe('ColumnIdEmitterService', () => {
  let service: ColumnIdEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnIdEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
