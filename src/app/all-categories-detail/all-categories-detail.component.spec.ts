import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoriesDetailComponent } from './all-categories-detail.component';

describe('AllCategoriesDetailComponent', () => {
  let component: AllCategoriesDetailComponent;
  let fixture: ComponentFixture<AllCategoriesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoriesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
