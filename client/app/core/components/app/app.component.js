import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { translation } from '../../../i18n/en';

import template from './app.template.html';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  template: template
})
export class AppComponent {

  constructor(@Inject('ENVIRONMENT') environment, translate: TranslateService) {
    this.environment = environment;

    translate.setTranslation('en', translation);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
