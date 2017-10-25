import { Component, Input } from '@angular/core';
import { Category } from './../category';


@Component({
  selector: 'ishoddy-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent {

  @Input() categories: Category[];
  
  constructor() { }

}
