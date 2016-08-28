import { TestBed, inject } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ShortDescriptionPipe } from './short-description.pipe';

let longDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret dolore.';
let expectedShortenedText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret...';
let shortDescription = 'Lorem ipsum.';

@Component({
  template: '<div id="post-description">{{ actualDescription | short_description }}</div>'
})
class TestComponent {
  actualDescription = longDescription;
}

describe('ShortDescriptionPipe', () => {
  let pipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortDescriptionPipe],
      declarations: [ShortDescriptionPipe, TestComponent]
    });
  });

  beforeEach(inject([ShortDescriptionPipe], (descriptionPipe) => {
    pipe = descriptionPipe;
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
      let fixture = TestBed.createComponent(TestComponent);
      let element = fixture.nativeElement;

      fixture.detectChanges();

      expect(element.querySelector('#post-description').innerText).toBe(expectedShortenedText);
    });
  });
});
