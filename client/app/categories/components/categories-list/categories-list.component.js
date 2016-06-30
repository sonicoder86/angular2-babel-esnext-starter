import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import template from './categories-list.template.html';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';
import { CategoriesService } from '../../services/categories/categories.service';
@Component({
  selector: 'categories-list',
  template: template,
  directives: [ROUTER_DIRECTIVES, CategoriesListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class CategoriesListComponent {
  constructor(params: RouteParams, categoriesService:CategoriesService) {    
    this._params = params;
    this._categoriesService = categoriesService;   
  }

  getRemoteCategories() {   
    //return [{name:'Angularjs'}, {name:'Angular2'}]
    return this._categoriesService.remoteCategories;
  }
  ngOnInit() {
    this._categoriesService.refreshCategories(this._currentCategory);
  }
}
