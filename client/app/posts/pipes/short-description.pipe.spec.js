import { TestBed, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { TestComponentBuilder } from '@angular/compiler/testing';
=======
>>>>>>> 6287fe8... upgrade to module syntax

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

<<<<<<< HEAD
  beforeEachProviders(() => [ShortDescriptionPipe, TestComponentBuilder]);
=======
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortDescriptionPipe],
      declarations: [ShortDescriptionPipe, TestComponent]
    });
  });
>>>>>>> 6287fe8... upgrade to module syntax

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
<<<<<<< HEAD
    it('should shorten long descriptions', (done) => {
      builder.createAsync(TestComponent).then((fixture) => {
        let element = fixture.nativeElement;
=======
    it('should shorten long descriptions', () => {
      let fixture = TestBed.createComponent(TestComponent);
      let element = fixture.nativeElement;
>>>>>>> 6287fe8... upgrade to module syntax

        fixture.detectChanges();

        expect(element.querySelector('#post-description').innerText).toBe(expectedShortenedText);
        done();
      }).catch(e => done.fail(e));
    });
  });
});
