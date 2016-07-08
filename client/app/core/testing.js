import { Router, Instruction } from '@angular/router';
import { Location } from '@angular/common';

class RouterMock {
  navigate() {}

  generate() {
    return new Instruction();
  }

  isRouteActive() {
    return false;
  }

  subscribe() {}
}

const CORE_TESTING_PROVIDERS = [
  Location,
  { provide: Router, useClass: RouterMock }
];

export {
  RouterMock,
  CORE_TESTING_PROVIDERS
};
