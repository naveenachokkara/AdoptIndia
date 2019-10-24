
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
import { SubhomeComponent } from './subhome/subhome.component';
import { SubhomeModule } from './subhome/subhome.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path : 'dashboard' , component: DashboardComponent},
      {path :'Home',component: SubhomeComponent}
    ]
  }
];
@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MaterialModule, MatMenuModule,
    DashboardModule, RouterModule.forChild(routes), CommonModule, FlexLayoutModule,DashboardModule,SubhomeModule],
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
