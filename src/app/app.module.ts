import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  MatGridListModule, MatCardModule, MatSidenavModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CustomtableComponent } from './home/customtable/customtable.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from 'src/material-module';



@NgModule({
  declarations: [
    AppComponent, CustomtableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    LeafletModule.forRoot(),
    MatSidenavModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatGridListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    FlexLayoutModule,
    MaterialModule,
    NgxDatatableModule
      ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [MatSidenavModule, CustomtableComponent, NgxDatatableModule]
})
export class AppModule { }
