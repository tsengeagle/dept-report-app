/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApportionService } from './apportion.service';

describe('Service: Apportion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApportionService]
    });
  });

  it('should ...', inject([ApportionService], (service: ApportionService) => {
    expect(service).toBeTruthy();
  }));
});
