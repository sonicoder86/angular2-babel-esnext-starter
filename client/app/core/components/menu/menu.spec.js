import { TestComponentBuilder } from 'angular2/testing';
import { Injector } from 'angular2/core';
import { TRANSLATE_PROVIDERS, TranslateService } from 'ng2-translate/ng2-translate';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs';
import { MenuComponent } from './menu';
import { CORE_TESTING_PROVIDERS, RouterMock } from '../../testing';
import { AUTH_TESTING_PROVIDERS, UserServiceMock } from '../../../auth/testing';
import { setupTranslations, enTranslation } from '../../../i18n';

describe('MenuComponent', () => {
  let builder;

  beforeEachProviders(() => [
    TestComponentBuilder,
    TRANSLATE_PROVIDERS,
    HTTP_PROVIDERS,
    AUTH_TESTING_PROVIDERS,
    CORE_TESTING_PROVIDERS
  ]);

  beforeEach(inject([Injector], (injector) => {
    builder = injector.get(TestComponentBuilder);
    setupTranslations(injector.get(TranslateService));
  }));

  it('should display page title', (done) => {
    spyOn(UserServiceMock.prototype, 'getLoggedIn').and.returnValue(Observable.of(true));

    builder.createAsync(MenuComponent).then((fixture) => {
      fixture.detectChanges();
      let header = fixture.nativeElement.querySelector('.navbar-brand');

      expect(header.textContent).toEqual(enTranslation.page_title);
      done();
    }).catch(e => done.fail(e));
  });

  it('should logout user', (done) => {
    spyOn(UserServiceMock.prototype, 'logout');
    spyOn(RouterMock.prototype, 'navigate');

    builder.createAsync(MenuComponent).then((fixture) => {
      let subject = fixture.componentInstance;

      let result = subject.logout();

      expect(UserServiceMock.prototype.logout).toHaveBeenCalled();
      expect(RouterMock.prototype.navigate).toHaveBeenCalledWith(['List']);
      expect(result).toBeFalsy();
      done();
    }).catch(e => done.fail(e));
  });
});
