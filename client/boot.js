import './shim';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app/core/app.routes';
import { CORE_PROVIDERS, CORE_DECLARATIONS, AppComponent } from './app/core';
import { AUTH_PROVIDERS, AUTH_DECLARATIONS } from './app/auth';
import { POSTS_PROVIDERS, POSTS_DECLARATIONS } from './app/posts';
import { CATEGORIES_PROVIDERS, CATEGORIES_DECLARATIONS } from './app/categories';
import { MaterialModule } from '@angular/material';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [CORE_DECLARATIONS, AUTH_DECLARATIONS, POSTS_DECLARATIONS, CATEGORIES_DECLARATIONS],
  imports: [
    HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    MaterialModule.forRoot()
  ],
  providers: [
    CORE_PROVIDERS, AUTH_PROVIDERS, POSTS_PROVIDERS, CATEGORIES_PROVIDERS,
    { provide: 'ENVIRONMENT', useValue: ENVIRONMENT }
  ],
  bootstrap: [AppComponent]
})
class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule);