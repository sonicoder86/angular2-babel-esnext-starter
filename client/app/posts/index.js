import { PostService } from './services/post/post.service';

import { ShortDescriptionPipe } from './pipes/short-description.pipe';

import { ClickCounterDirective } from './directives/click-counter.directive';

import { PostFormComponent } from './components/post-form/post-form.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListComponent } from './components/post-list/post-list.component';

export {
  PostService
};

export const POSTS_PROVIDERS = [PostService];
export const POSTS_DECLARATIONS = [
  ShortDescriptionPipe,
  ClickCounterDirective,
  PostFormComponent,
  PostEditComponent,
  PostNewComponent,
  PostListItemComponent,
  PostListComponent
];
