import { Component, InjectMetadata } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';
import template from './app.html';
import { setupTranslations } from '../../../i18n';
import { MenuComponent } from '../menu/menu';
import { LoggedInRouterOutlet } from '../../../auth';
import { router } from './router';
import { environment } from '../../index';

@Component({
  selector: 'my-app',
  directives: [LoggedInRouterOutlet, MenuComponent],
  template: template,
  pipes: [TranslatePipe]
})
@RouteConfig(router.config)
export class AppComponent {
  static get parameters() {
    return [[TranslateService], [new InjectMetadata(environment)]];
  }

  constructor(translateService, env) {
    this.environment = env;
    setupTranslations(translateService);
  }
}
