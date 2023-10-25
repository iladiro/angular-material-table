import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IladiroAngularMaterialTableLibraryComponent } from './iladiro-angular-material-table-library.component';

describe('IladiroAngularMaterialTableLibraryComponent', () => {
  let component: IladiroAngularMaterialTableLibraryComponent;
  let fixture: ComponentFixture<IladiroAngularMaterialTableLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IladiroAngularMaterialTableLibraryComponent]
    });
    fixture = TestBed.createComponent(IladiroAngularMaterialTableLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
