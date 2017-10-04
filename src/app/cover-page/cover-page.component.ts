import { Component, OnInit } from '@angular/core';


import { Category } from '../category';
import { Professional } from '../professional';
import { ProfessionalsService } from '../professionals.service';

@Component({
  selector: 'ishoddy-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {

  private _category:string = "";
  private _showProfessionals = false;
  
  private _professionals: Professional[];

  constructor(private _professionalsService: ProfessionalsService) { }

  showCategory(category: Category):void {
    this._category = category._id;
    this._showProfessionals = true;
  }
  
  showProfessional():void {
    this._showProfessionals = false;
  }
    
  
}



