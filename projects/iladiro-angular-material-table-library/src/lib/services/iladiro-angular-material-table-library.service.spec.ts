import { TestBed } from '@angular/core/testing';

import { IladiroAngularMaterialTableLibraryService } from './iladiro-angular-material-table-library.service';

describe('IladiroAngularMaterialTableLibraryService', () => {
  let service: IladiroAngularMaterialTableLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IladiroAngularMaterialTableLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
