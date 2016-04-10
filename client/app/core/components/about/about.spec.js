import { TestComponentBuilder } from 'angular2/testing';
import { BrowserDomAdapter } from 'angular2/platform/browser';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let subjectFixture;
  let subject;
  let subjectElement;
  let dom;

  beforeEachProviders(() => [
    TestComponentBuilder,
    BrowserDomAdapter
  ]);

  beforeEach(injectAsync([TestComponentBuilder, BrowserDomAdapter], (componentBuilder, _dom_) => {
    dom = _dom_;

    return componentBuilder
      .createAsync(AboutComponent)
      .then(fixture => {
        subject = fixture.componentInstance;
        subjectElement = fixture.nativeElement;
        subjectFixture = fixture;
      });
  }));

  it('should display title', () => {
    let header = dom.querySelector(subjectElement, 'h1');

    expect(header.textContent).toEqual('About');
  });
});
