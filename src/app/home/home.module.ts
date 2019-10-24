
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';
import {
  MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];
@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MaterialModule, MatMenuModule,
    DashboardModule, RouterModule.forChild(routes), CommonModule, FlexLayoutModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [MatSidenavModule, HomeComponent]
})
export class HomeModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule : HomeModule,
  //     providers: []
  //   };
  // }
}
