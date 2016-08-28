import { CategoriesService } from './services/categories/categories.service';

import { CategoriesListItemComponent } from './components/categories-list-item/categories-list-item.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

export {
  CategoriesService
};
export const CATEGORIES_PROVIDERS = [CategoriesService];
export const CATEGORIES_DECLARATIONS = [
  CategoriesListItemComponent,
  CategoriesListComponent
];
