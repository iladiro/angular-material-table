import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'iladiro-angular-material-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent {
  @Input() inputPlaceholder!: string;
  @Input() isFilterOpen!: boolean | undefined;
  @Input() col!: string;
  @Input() cleanValue!: boolean;
  @Input() cleanAllFilter!: boolean;
  @Input() closeAllFilter!: boolean;
  @Output() applyFilterEvent = new EventEmitter();
  @Output() toggleFilterEvent = new EventEmitter();
  @Output() cleanFilterEvent = new EventEmitter();

  applyFilter(value: string): void {
    this.applyFilterEvent.emit(value)
  }

  toggleFilter(): void {
    this.toggleFilterEvent.emit(!this.isFilterOpen);
  }

  closeFilter(): void {
    this.toggleFilterEvent.emit(false);
  }

  cleanFilter(value: string): void {
    this.cleanFilterEvent.emit(value);
  }
}
