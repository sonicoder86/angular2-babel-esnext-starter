import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './components/app/app.component';

export { AppComponent };
export const CORE_PROVIDERS = [LoggedInGuard, LoggedOutGuard];
export const CORE_DECLARATIONS = [AboutComponent, MenuComponent, AppComponent];
