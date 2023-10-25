import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFilterComponent } from './selected-filter.component';

describe('SelectedFilterComponent', () => {
  let component: SelectedFilterComponent<any>;
  let fixture: ComponentFixture<SelectedFilterComponent<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedFilterComponent]
    });
    fixture = TestBed.createComponent(SelectedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
