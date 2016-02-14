import { HelloComponent } from './hello';
import { TestComponentBuilder } from 'angular2/testing';

describe('AppComponent', () => {
  it('renders app', injectAsync([TestComponentBuilder], (builder) => {
    return builder.createAsync(HelloComponent)
      .then((fixture) => {
        expect(fixture.debugElement.nativeElement).toHaveText('Angular 2 App');
      });
  }));
});
