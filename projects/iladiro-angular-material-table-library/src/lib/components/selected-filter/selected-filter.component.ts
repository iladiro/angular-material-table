import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IladiroAMTFilter } from '../../interfaces/iladiro-table-filter.interface';

@Component({
  selector: 'iladiro-angular-material-table-selected-filter',
  templateUrl: './selected-filter.component.html',
  styleUrls: ['./selected-filter.component.scss']
})
export class SelectedFilterComponent<T> {
  @Input() filterValues: IladiroAMTFilter<T>[] = [];
  @Output() removeFilterEvent = new EventEmitter();
  @Output() removeAllFilterEvent = new EventEmitter();

  removeFilter(index: number, filter: IladiroAMTFilter<T>) {
    this.removeFilterEvent.emit({
      index: index,
      filter: filter,
    });
  }

  removeAllFilter() {
    this.removeAllFilterEvent.emit();
  }
}
