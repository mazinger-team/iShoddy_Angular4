import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Professional } from './../professional';
import { ProfessionalsService } from './../services/professionals/professionals.service';

@Component({
  selector: 'ishoddy-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss']
})
export class ProfessionalDetailComponent implements OnChanges {

  @Input("professional") item: Professional;
  
  constructor(private _professionalsService: ProfessionalsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this._professionalsService
    .getProfessional(this.item.id)
    .subscribe((professional: Professional) => {
      this.item = professional;
    });
  }


}
