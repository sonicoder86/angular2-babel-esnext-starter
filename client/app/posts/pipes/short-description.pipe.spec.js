import { Component } from '@angular/core';
import { TestComponentBuilder } from '@angular/core/testing';

import { ShortDescriptionPipe } from './short-description.pipe';

let longDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret dolore.';
let expectedShortenedText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret...';
let shortDescription = 'Lorem ipsum.';

@Component({
  selector: 'test',
  pipes: [ShortDescriptionPipe],
  template: `
    <div id="post-description">{{ actualDescription | short_description }}</div>
  `
})
class TestComponent {
  actualDescription = longDescription;
}

describe('ShortDescriptionPipe', () => {
  let pipe;
  let builder;

  beforeEach(() => {
    addProviders([ShortDescriptionPipe, TestComponentBuilder]);
  });

  beforeEach(inject([ShortDescriptionPipe, TestComponentBuilder], (descriptionPipe, componentBuilder) => {
    pipe = descriptionPipe;
    builder = componentBuilder;
  }));

  describe('as a function', () => {
    it('should shorten long descriptions', () => {
      expect(pipe.transform(longDescription)).toEqual(expectedShortenedText);
    });

    it('should leave short descriptions untouched', () => {
      expect(pipe.transform(shortDescription)).toEqual(shortDescription);
    });
  });

  describe('as a pipe', () => {
    it('should shorten long descriptions', () => {
      let fixture = builder.createSync(TestComponent);
      let element = fixture.nativeElement;

      fixture.detectChanges();

      expect(element.querySelector('#post-description').innerText).toBe(expectedShortenedText);
    });
  });
});
