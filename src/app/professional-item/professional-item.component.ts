import { Component, Input } from '@angular/core';

import { Professional } from './../professional';

@Component({
  selector: 'ishoddy-professional-item',
  templateUrl: './professional-item.component.html',
  styleUrls: ['./professional-item.component.scss']
})
export class ProfessionalItemComponent {

  @Input() item: Professional;

  constructor() { 
  }

}
