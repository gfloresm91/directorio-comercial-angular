import { TestBed } from '@angular/core/testing';

import { Lugares.Service.TsService } from './lugares.service.ts.service';

describe('Lugares.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lugares.Service.TsService = TestBed.get(Lugares.Service.TsService);
    expect(service).toBeTruthy();
  });
});
