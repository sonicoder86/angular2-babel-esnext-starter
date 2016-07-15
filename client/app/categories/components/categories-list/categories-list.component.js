import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import template from './categories-list.template.html';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';
import { CategoriesService } from '../../services/categories/categories.service';
@Component({
  selector: 'categories-list',
  template: template,
  directives: [CategoriesListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class CategoriesListComponent {
  constructor(route: ActivatedRoute, categoriesService:CategoriesService) {    
    this._categoriesService = categoriesService;   
  }

  getRemoteCategories() {
    return this._categoriesService.remoteCategories;
  }
  ngOnInit() {
    this._categoriesService.refreshCategories();
  }
}
