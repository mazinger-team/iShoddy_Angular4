import { Component } from '@angular/core';

import { Category } from './category';
import { Professional } from './professional';
import { ProfessionalsService } from './professionals.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'iShoddy';
  private _category:string = "";
  private _showProfessionals = false;

  private _professionals: Professional[];

  constructor(private _professionalsService: ProfessionalsService) { }

  showCategory(category: Category):void {
    this._category = category.name;
    this._showProfessionals = true;
  }

  showProfessional():void {
    this._showProfessionals = false;
  }
    
}
