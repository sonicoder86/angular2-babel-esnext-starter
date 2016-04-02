import { ListComponent } from '../../../posts/components/list/list';
import { NewComponent } from '../../../posts/components/new/new';
import { EditComponent } from '../../../posts/components/edit/edit';
import { AboutComponent } from '../about/about';
import { LoginComponent } from '../../../auth/components/login/login';

export const router = {
  config: [
    { path: '/', component: ListComponent, name: 'List', useAsDefault: true },
    { path: '/new', component: NewComponent, name: 'New' },
    { path: '/edit/:id', component: EditComponent, name: 'Edit' },
    { path: '/about', component: AboutComponent, name: 'About' },
    { path: '/login', component: LoginComponent, name: 'Login' }
  ]
};
