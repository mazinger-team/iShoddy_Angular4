import { Component, Input } from '@angular/core';

import { Category } from './../category';


@Component({
  selector: 'ishoddy-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {

  @Input() item: Category;
  
  constructor() {
  }

}
