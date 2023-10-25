# MaterialTableFilter Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.<b><br>

It is an Angular library based on Material to filter tabular data by columns. Here is an example:

![Alt text](./projects/iladiro-angular-material-table/screenshots/table.png?raw=true "Table")

![Alt text](./projects/iladiro-angular-material-table/screenshots/filtered-table.png?raw=true "Filtered table")

![Alt text](./projects/iladiro-angular-material-table/screenshots/filtered-table-2.png?raw=true "Filtered table")

## Before start
1. Make sure to install ```@angular/material``` and ```@angular/cdk```
1. Import a material theme on your preference. Ex: ```@import '../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';```
1. npm i @iladiro/angular-material-table<br>
1. Import a Material theme on your preference from ```import { IladiroAngularMaterialTableModule } from '@iladiro/angular-material-table'```. <br><br>May not works as expected without it.

## Getting Setup

Use ```<iladiro-angular-material-table></iladiro-angular-material-table>``` selector to show table

## Interface
You need to map your array objects in an object's list compatible with the library based on custom interface.<br>
Each column of the table has to match with interface properties<br><br>

For example, this is my custom interface

        interface TableList {
            name: string;
            surname: string;
            gender: string;
            buttons?: IladiroAMTButton[];
        }

Note: About buttons property is not required but the interface to import in your project has to be IladiroAMTButton[] and the property must have exactly this name

## Example 

The example below shows the mandatory data!<br><br>

<pre>
    const list: TableList[] = [
        {
            name: 'Richard',
            surname: 'Brown',
            gender: 'male',
            buttons: [
            {
                icon: "open_in_new",
                label: "View",
                action: "view",
                link: "",
                title: "View"
            },
            {
                icon: "delete",
                label: "",
                action: "delete",
                link: "",
                title: "Delete"
            }
            ]
        }
    ]
</pre>

<strong>Default</strong>

```<iladiro-angular-material-table [list]="list" [displayedColumns]="['name', 'surname', 'gender', 'buttons']"></iladiro-angular-material-table>```

<strong>Custom</strong><br>

```<iladiro-angular-material-table [inputPlaceholder]="'Filter on'" [filterValues]="filterValues" [customClass]="'myapp'" (callToActionEvent)="callToActionEvent($event)" (appliedFilterEvent)="whatFilter($event)" (paginatorEvent)="paginator($event)" [noResultLabel]="'No results found'" [displayedColumns]="['name', 'surname', 'gender', 'buttons']" [list]="list"></iladiro-angular-material-table>```

## Options

  Property | Type | Required | Default | Notes
  ------------ | ------------- | ------------- | ------------- | -------------
  list | ``` Array ``` | yes | ``` undefined ``` | This widget expect a list to show it.   
  displayedColumns | ``` Array<string> ``` | yes | ``` undefined ``` | To show columns in the table you have to pass an array of string where each value match with the properties of the custom interface. Ex: [displayedColumns]="['name', 'surname', 'gender', 'buttons']"    
  inputPlaceholder | ``` String ``` | no | ``` Find by ``` | You can also pass a placeholder to show into filter input field
  customClass | ``` String ``` | no | ``` undefined ``` | You can also pass a class or a list of classes to add to the parent 
  noResultLabel | ``` String ``` | no | ``` No results ``` | You can also pass a custom text to show when no result returned
  filterValues | ``` Filter<any>[] ``` | no | ``` [] ``` | If you use store like Ngrx or others, you can save it into store don't lose filters in the case user leave the component to go to another route. 
  pageIndex | ``` number ``` | no | ``` 0 ``` | If you use store like Ngrx or others, you can save it into store don't lose last pageindex in the case user leave the component to go to another route..   
  showPageSizeOptions | ``` boolean ``` | no | ``` true ``` | You can choose to show or not the page size option
  pageSizeOptions | ``` number[] ``` | no | ``` [5, 10, 15] ``` | If you set showPageSizeOptions to true you can pass yuour custom page size options
  showFirstLastButtons | ``` boolean ``` | no | ``` true ``` | You can choose to show or not first and last paginator's arrow
  pageSize | ``` number ``` | no | ``` 5 ``` | On your preferences, You can set how many records show for each page
  hidePageSize | ``` boolean ``` | no | ``` false ``` | You can choose to show or not page size per page element

## Events

  Event name | Return | Description | Example
  ------------ | ------------- | ------------- | -------------
  paginatorEvent | ``` {length: 14, pageIndex: 1, pageSize: 5, previousPageIndex: 0} ``` | Allows you to capture the event when the paginator is used | ```<iladiro-angular-material-table (paginatorEvent)="console.log($event)"></iladiro-angular-material-table>```
  callToActionEvent | ``` { icon: "delete", label: "", action: "delete", link: "", title: "Delete"} ``` | Allows you to capture the event when click on row's button | ```<iladiro-angular-material-table (callToActionEvent)="console.log($event)"></iladiro-angular-material-table>```
  appliedFilterEvent | ``` { "filterValues": [ { "value": "ma", "col": "name" } ], "filteredData": [ { "name": "Mario", "surname": "Rossi", "gender": "Maschio", "buttons": [ { "icon": "open_in_new", "label": "Visualizza", "action": "view", "link": "", "title": "View" }, { "icon": "delete", "label": "", "action": "delete", "link": "", "title": "Delete" } ] } ], "length": 1 } ``` | Allows you to capture the event when the user use the filter. What return is filters list, filtered data and the array lenght | ```<iladiro-angular-material-table (appliedFilterEvent)="console.log($event)"></iladiro-angular-material-table>```