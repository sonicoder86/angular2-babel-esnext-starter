import { Pipe } from '@angular/core';

@Pipe({
  name: 'short_description'
})
export class ShortDescriptionPipe {
  transform(value) {
    let transformedValue;
    if (value && value.length > 100) {
      transformedValue = `${value.substring(0, 100)}...`;
    } else {
      transformedValue = value;
    }

    return transformedValue;
  }
}
