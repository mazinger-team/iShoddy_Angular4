import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { ProfessionalsService } from './../professionals.service';

import { Professional } from './../professional';
import { Category } from './../category';


@Component({
  selector: 'ishoddy-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.scss']
})
export class ProfessionalsListComponent implements OnChanges {

  @Input() category: string;
  @Output() showCategories: EventEmitter<void> = new EventEmitter<void>();
  @Output() professionalSelected: EventEmitter<object> = new EventEmitter<object>();
  
  private _professionals: Professional[];

  constructor(private _professionalsService: ProfessionalsService) { }
 
  ngOnChanges(changes: SimpleChanges) {
    let significativeChange = changes.category && changes.category.currentValue != changes.category.previousValue && changes.category.currentValue !="";
    if (significativeChange) {
      this.getProfessionals();
    }
  }

  goback():void {
    this.showCategories.emit();
  }

  getProfessionals():void {
     this._professionalsService
         .getProfessionals(this.category)
         .subscribe((professionals: Professional[]) => {
           this._professionals = professionals;
         });
  }

  showProfessional(professional: Object): void {
    this.professionalSelected.emit(professional);    
  }
}


