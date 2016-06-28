import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import template from './categories-list-item.template.html';
@Component({
  selector: 'categories-list-item',
  template: template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListItemComponent {
  @Input() category;  
}