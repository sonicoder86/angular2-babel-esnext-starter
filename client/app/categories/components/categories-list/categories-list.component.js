import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import template from './categories-list.template.html';
//import { PostService } from '../../services/post/post.service';
import { CategoriesListItemComponent } from '../categories-list-item/categories-list-item.component';
import { UserService } from '../../../auth';
@Component({
  selector: 'categories-list',
  template: template,
  directives: [ROUTER_DIRECTIVES, CategoriesListItemComponent],
  changeDetection: ChangeDetectionStrategy.Detached
})
export class CategoriesListComponent {
  constructor(params: RouteParams) {    
    this._params = params;   
  }

  getRemoteCategories() {   
    return [{name:'Angularjs'}, {name:'Angular2'}]
  }
 
}
