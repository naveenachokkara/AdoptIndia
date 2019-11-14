import { ColumnConfig } from './customtable.constants';
import { ElementRef, PipeTransform } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

export const TABLECONFIG : TableConfig ={
name : '',
nameNew: '',
containerClass:'custom-class',
multiSort:true,
tableRowsPerPage:10,
showSearch: true,
showPageCount: true,
actionsMode: 'none',
actionsColumnWidth : 15,
showColumnFilter: true,
pagingMode: 'paged',
rowSelectionMode:'none',
showAddActionPermission: [''],
enableRowDetails: false,
headerClass : 'custom-header',
pageSizeOptions:[5, 10, 20, 50],
actions:[],
filterActions:[],
columns:[],
filterProps:[],
import: false,
export :false,
importFileList: [],
tooltips:{
  settingsIcon: 'Table Customizations',
  filterIcon: 'Filters',
  addIcon: 'New'
},
messages:{
  totalMessage: 'Total Rows',
    emptyMessage: 'No Rows to display',
    itemsPerPage: 'Items Per Page',
    loadingMessage: 'Loading Rows'
}
};

export interface TableConfig{
  id?: string;
  name?: string;
  nameNew?: string;
  containerClass: string;
  multiSort: boolean;
  tableRowsPerPage: number;
  showSearch: boolean;
  showPageCount: boolean;
  showAdvanceFilter?: boolean;
  showColumnFilter: boolean;
  actionsMode: 'custom' | 'none';
  actionsColumnWidth: number;
  pagingMode: 'none' | 'infinite' | 'paged' | 'backend';
  showAddActionPermission?: string[];
  rowSelectionMode: 'none' | 'single' | 'multi';
  enableRowDetails: boolean;
  pageSizeOptions: number[];
  detailsRowTemplate?: ElementRef;
  detailsRowStyleClass?: string;
  loadingTemplate?: ElementRef;
  headerClass: string;
  columns: ColumnConfig[];
  customColumns?: ColumnConfig[];
  filterProps?: string[];
  actions: ActionConfig[];
  filterActions: ActionConfig[];

  sortBy?: SortBy[];
  messages?: any;
  import?: boolean;
  export?: boolean;
  importFileList?: any;
  tooltips?: {
    settingsIcon?: string;
    filterIcon?: string;
    addIcon?: string;
  };
}
export interface SortBy{
  prop: string;
  type: string;
}

export interface ColumnConfig{
  prop: string;
  name: string;
  alignment?: string;
  calculatedAlignment?: string;
  sortable: string;
  pipe?: PipeTransform;
  rendererType?: string;  // chips, image, link, list, template
  width?: number;
  calculatedWidth?: number;
  showEllipsis?: boolean;
  showTooltips?: boolean;
  cellClick?: boolean;
  cellTemplate?: ElementRef;
  styleClass?: string;
  hidden?: boolean;
  deepProp?: boolean;
}
export interface ActionConfig{
  code: string;
  icon: string;
  title?: string;
  permissions?: string[];
  prop?: string;
  hideOnProp?: boolean;
  menuTrigger?: any;
}
