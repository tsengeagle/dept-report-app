import { Injectable } from '@angular/core';

@Injectable()
export class ApportionService {

  constructor() { }

  GetData(): string[] {
    return ['ServiceA', 'ServiceB', 'ServiceC', 'ServiceD'];
  }
}
