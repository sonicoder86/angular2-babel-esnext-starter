'use strict';
import {Pipe} from 'angular2/core';

@Pipe({
  name: 'short_description'
})
export class ShortDescriptionPipe {
  transform(value, args) {
    if (value && value.length > 100) {
      return value.substring(0, 100) + '...';
    }
    else {
      return value;
    }
  }
}
