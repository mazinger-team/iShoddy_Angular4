import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Category } from './../category';
import { CategoriesService } from './../categories.service';


@Component({
  selector: 'ishoddy-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  private _categories: Category[];

  constructor(private _categoriesService: CategoriesService) { }

  @Output() categorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  
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
    this.categorySelected.emit(category);
  }


};