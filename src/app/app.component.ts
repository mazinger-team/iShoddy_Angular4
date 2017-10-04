import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoriesService } from "./categories.service";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private title = 'iShoddy';

  private _categories: Category[];

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    this._categoriesService
    .getCategories()
    .subscribe((categories: Category[]) => {
      this._categories = categories;
    });  
  }

}
