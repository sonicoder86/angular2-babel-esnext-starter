import { PostListComponent } from '../posts/components/post-list/post-list.component';
import { CategoriesListComponent } from '../categories/components/categories-list/categories-list.component';
import { PostNewComponent } from '../posts/components/post-new/post-new.component';
import { PostEditComponent } from '../posts/components/post-edit/post-edit.component';
import { ArticleComponent } from '../posts/components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

export const routes = [
  { path: '', component: PostListComponent, terminal: true },
  { path: 'categories', component: CategoriesListComponent, name: 'Categories'},
  { path: 'categories/:category', component: PostListComponent, name: 'CategoryList'},
  { path: 'new', component: PostNewComponent, canActivate: [LoggedInGuard] },
  { path: 'edit/:id', component: PostEditComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard] },
  { path: 'article/:id', component: ArticleComponent, name: 'Article' }
];