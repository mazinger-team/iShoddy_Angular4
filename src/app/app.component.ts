import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(private _categoriesService: CategoriesService, private _router: Router) { }

  ngOnInit() {
    this._categoriesService
    .getCategories()
    .subscribe((categories: Category[]) => {
      this._categories = categories;
    });
    
  }

  sendRegister(){
    this._router.navigate(["/userregistry"]);

  }

}
