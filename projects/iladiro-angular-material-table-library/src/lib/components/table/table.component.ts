import { Component, ElementRef, EventEmitter, Input, OnInit, OnChanges, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ObjectKey } from '../../types/col.types';
import { IladiroAMTFilter, IladiroAMTFilterStatus, IladiroAMTFilterStatusClass } from '../../interfaces/iladiro-table-filter.interface';

@Component({
  selector: 'iladiro-angular-material-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
  
})
export class TableComponent<T> implements OnInit, OnChanges {

  @Input() inputPlaceholder!: string;
  @Input() filterValues: IladiroAMTFilter<T>[] = [];
  @Input() pageIndex = 0;
  @Input() showPageSizeOptions = true;
  @Input() pageSizeOptions: number[] = [5, 10, 15];
  @Input() noResultLabel = "No results";
  @Input() showFirstLastButtons = true;
  @Input() pageSize = 5;
  @Input() hidePageSize = false;
  @Input() customClass!: string;
  @Input() list!: T[];
  @Input() displayedColumns!: ObjectKey<T>[];
  @Output() paginatorEvent = new EventEmitter();
  @Output() callToActionEvent = new EventEmitter<any>();
  @Output() appliedFilterEvent = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChildren('formElement') formElement!: QueryList<ElementRef>;
  @ViewChildren('inputSearchElement') inputSearch!: QueryList<ElementRef>;

  dataSource!: MatTableDataSource<T>;    
  length!: number;

  cleanAllFilter!: boolean;
  closeAllFilter!: boolean;

  witchColumnFilterIsOpen: IladiroAMTFilterStatus = new IladiroAMTFilterStatusClass(
    false,
    false,
    ''
  );  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.list?.currentValue?.length > 0) {
      this.dataSource = new MatTableDataSource(this.list);      

      this.length = changes?.list?.currentValue.length;

      if(this.filterValues?.length !== 0) {
        console.log("esiste un filtro")
        this.applyFilter('fakevalue');
      } else {
        console.log("non esiste nessun filtro");
      }  

      this.dataSource.paginator = this.paginator;
    } 
  }

  ngOnInit() {
    if(this.filterValues !== undefined && this.filterValues?.length !== 0) {
      console.log("esegui una sola volta");
      this.applyFilter('fakevalue');
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  generateFilter(value: string, col: ObjectKey<T>) {
    const index = this.filterValues.findIndex((item) => {
      return item.col === col;
    });
    // If already exist
    if (index !== -1) {
      this.filterValues[index] = {
        value: value,
        col: col,
      };
    } else {
      this.filterValues.push({
        value: value,
        col: col,
      });
    }
    this.applyFilter(value);
  }

  applyFilter(value: string): void {    
    this.dataSource.filterPredicate = (item: T, value: string) => {
      const filtered = this.filterValues.map((filter: IladiroAMTFilter<T>) => {
        return (item[filter['col']] as any)
          .toString()
          .toLowerCase()
          .startsWith(filter['value'].toLowerCase())
          ? item
          : null;
      });
      if (filtered.includes(null)) {
        return false;
      } else {
        return true;
      }
    };
    this.dataSource.filter = value.trim().toLowerCase();
    this.appliedFilterEvent.emit({
      filterValues: this.filterValues,
      filteredData: this.dataSource.filteredData,
      length: this.dataSource.filteredData.length
    });
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeFilter(filter: { index: number; filter: IladiroAMTFilter<T> }) {
    this.filterValues.splice(filter.index, 1);
    this.toggleFilter(false, filter.filter.col, true);
    this.applyFilter('fakevalue');
  }

  removeAllFilter(): void {
    this.cleanAllFilter = true;
    this.closeAllFilter = true;
    this.witchColumnFilterIsOpen.open = false;

    this.filterValues = [];
    this.applyFilter('fakevalue');
  }

  toggleFilter(open: boolean, col: string, clean: boolean): void {
    this.witchColumnFilterIsOpen = {
      clean: clean,
      open: open,
      col: col,
    };
  }

  cleanFilter(value: string, col: ObjectKey<T>) {
    this.filterValues = this.filterValues.filter((filter: IladiroAMTFilter<T>) => {
      return filter.col !== col ? filter : null;
    });
    this.applyFilter('fakevalue');
  }

  clickOn(record: T, action: string): void {
    this.callToActionEvent.emit({
      item: record,
      action: action
    });
  }

  handlePageEvent(event: PageEvent): void {
    this.paginatorEvent.emit(event);
  }

}
