import { Router, Instruction } from '@angular/router';
import { Location } from '@angular/common';

import { provide } from '@angular/core';

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
  provide(Router, { useClass: RouterMock })
];

export {
  RouterMock,
  CORE_TESTING_PROVIDERS
};
