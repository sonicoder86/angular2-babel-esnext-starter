import { TestComponentBuilder, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let subjectElement;

  beforeEach(() => {
    addProviders([TestComponentBuilder]);
  });

  beforeEach(async(inject([TestComponentBuilder], (componentBuilder) => {
    return componentBuilder
      .createAsync(AboutComponent)
      .then(fixture => {
        subjectElement = fixture.nativeElement;
      });
  })));

  it('should display title', () => {
    let header = subjectElement.querySelector('h1');

    expect(header.textContent).toEqual('About');
  });
});
