import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Category } from './../category';
import { CategoriesService } from './../services/categories/categories.service';


@Component({
  selector: 'ishoddy-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
//  private _categories: Category[];

  constructor(private _categoriesService: CategoriesService) { }

  @Input("categories") _categories: Category[];
  @Output() categorySelected: EventEmitter<object> = new EventEmitter<object>();
  
  ngOnInit() {
    //obtiene las categorías;
    //this._categories = this._categoriesService.getLocalCategories();
    
    if (!this._categories) {
      this._categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this._categories = categories;
      });
    }
  
  }

  showProfessionals(category: Category):void {
    this.categorySelected.emit({allCategories: this._categories, categorySelected:category});
  }


};