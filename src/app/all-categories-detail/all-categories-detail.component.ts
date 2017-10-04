import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ishoddy-all-categories-detail',
  templateUrl: './all-categories-detail.component.html',
  styleUrls: ['./all-categories-detail.component.scss']
})
export class AllCategoriesDetailComponent implements OnInit {

  @Input() category: Object;
  
  constructor() { }
  ngOnInit() {
  }

}
