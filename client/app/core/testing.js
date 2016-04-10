import { Router, Location, Instruction } from 'angular2/router';
import { provide } from 'angular2/core';

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
