'use strict';

describe('app', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('Angular 2 QuickStart');
  });

  it('shows a link to the GitHub repo', () => {
    expect(element(by.tagName('h1')).getText()).toEqual('My First Angular 2 App');
  });
});
