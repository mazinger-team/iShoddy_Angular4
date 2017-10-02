import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsListComponent } from './professionals-list.component';

describe('ProfessionalsListComponent', () => {
  let component: ProfessionalsListComponent;
  let fixture: ComponentFixture<ProfessionalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
