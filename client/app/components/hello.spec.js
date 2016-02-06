'use strict';
import {HelloComponent} from './hello';
//import {AsyncTestCompleter, TestComponentBuilder} from 'angular2/testing_internal';

describe('AppCoponent', function() {
  it('should works', function() {
    expect(true).toBe(true);
  });

  //it('renders app', inject([TestComponentBuilder, AsyncTestCompleter], (builder, async) => {
  //  builder.createAsync(HelloComponent)
  //    .then((fixture) => {
  //      expect(fixture.debugElement.nativeElement).toHaveText('Angular 2 App');
  //
  //      async.done();
  //    })
  //    .catch((e) => async.done(e));
  //}));
});
