import { Component } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'ishoddy-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {

  private _category:string = "";
  private _showProfessionals = false;
  

  constructor() { }

  showCategory(category: Category):void {
    this._category = category._id;
    this._showProfessionals = true;
    window.scrollTo(0, 0)
  }
  
  showProfessional():void {
    this._showProfessionals = false;
    window.scrollTo(0, 0)
  }
    
  
}



