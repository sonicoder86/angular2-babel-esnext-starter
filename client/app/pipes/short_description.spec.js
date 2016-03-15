import { ShortDescriptionPipe } from './short_description';
import { Component } from 'angular2/core';
import { TestComponentBuilder } from 'angular2/testing';

let longDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret dolore.';
let expectedShortenedText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboret...';
let shortDescription = 'Lorem ipsum.';

describe('ShortDescriptionPipe', () => {
  let pipe, builder;

  beforeEachProviders(() => [ShortDescriptionPipe, TestComponentBuilder]);

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
    it('should shorten long descriptions', (done) => {
      builder.createAsync(TestComponent).then((fixture) => {
        let element = fixture.nativeElement;

        fixture.detectChanges();

        expect(element.querySelector('#post-description').innerText).toBe(expectedShortenedText);
        done();
      }).catch(e => done.fail(e));
    });
  });
});

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
