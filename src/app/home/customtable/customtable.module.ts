import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomtableComponent } from './customtable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [CustomtableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [CustomtableComponent]
})
export class CustomtableModule { }
