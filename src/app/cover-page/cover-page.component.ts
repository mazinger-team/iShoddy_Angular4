import { Component } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'ishoddy-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {

  private _category:string = "";
  private categories: Category[];
  private _showProfessionals = false;
  private _professional = {};

  constructor() { }

  showCategory(data: object):void {
    this._category = data["categorySelected"]._id;
    this.categories = data["allCategories"];
    this._showProfessionals = true;
    this._professional = {};
    window.scrollTo(0, 0)
  }
  
  showProfessionals():void {
    this._showProfessionals = false;
    window.scrollTo(0, 0)
  }
    
  showProfessional(professional: object):void {
    this._professional = professional;
  }
  
}



