'use strict';
import {AppComponent} from './app.component';
import {AsyncTestCompleter, TestComponentBuilder} from 'angular2/testing_internal';

describe('AppCoponent', function() {
  it('renders app', inject([TestComponentBuilder, AsyncTestCompleter], (builder, async) => {
    builder.createAsync(AppComponent)
      .then((fixture) => {
        expect(fixture.debugElement.nativeElement).toHaveText('My First Angular 2 App');

        async.done();
      })
      .catch((e) => async.done(e));
  }));
});
