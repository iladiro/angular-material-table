import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { SelectedFilterComponent } from './components/selected-filter/selected-filter.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { DayDifferenceFromTodayPipe } from './pipes/day-difference-from-today.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { IladiroMaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    TableCellComponent,
    FilterFormComponent,
    SelectedFilterComponent,
    ReplacePipe,
    DayDifferenceFromTodayPipe
  ],
  imports: [
    BrowserModule,
    IladiroMaterialModule,
    FormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class IladiroAngularMaterialTableLibraryModule { }
