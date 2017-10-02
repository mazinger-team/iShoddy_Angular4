import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalItemComponent } from './professional-item.component';

describe('ProfessionalItemComponent', () => {
  let component: ProfessionalItemComponent;
  let fixture: ComponentFixture<ProfessionalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
