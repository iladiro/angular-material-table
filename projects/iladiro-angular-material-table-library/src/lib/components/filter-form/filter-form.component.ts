import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'iladiro-angular-material-table-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnChanges {
  @Input() inputPlaceholder = "Find by";
  @Input() col!: string;
  @Input() isFilterOpen!: boolean | undefined;
  @Input() cleanValue!: boolean;
  @Input() cleanAllFilter!: boolean;
  @Input() closeAllFilter!: boolean;
  @Output() applyFilterEvent = new EventEmitter();
  @Output() closeFilterEvent = new EventEmitter();
  @Output() cleanFilterEvent = new EventEmitter();

  filterValue!: string;

  applyFilter(): void {
    this.applyFilterEvent.emit(this.filterValue)
  }

  closeFilter(): void {
    this.closeFilterEvent.emit(true);
  }

  cleanFilter(): void {
    this.filterValue = "";
    this.cleanFilterEvent.emit(this.filterValue);
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if(changes.cleanValue?.currentValue) {
      this.filterValue = "";
    }
    if(changes.cleanAllFilter?.currentValue) {
      this.filterValue = "";
    }   
    if(changes.closeAllFilter?.currentValue) {
      this.isFilterOpen = false;
    }   
  }
}
