
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';
import { MatToolbar, MatIcon, MatMenu, MatToolbarRow, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: HomeComponent , children: [
    {path : 'dashboard' , component: DashboardComponent}
  ]}
];
@NgModule({
  imports: [MatToolbarModule , MatIconModule ,MatMenuModule,DashboardModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule : HomeModule,
  //     providers: []
  //   };
  // }
}
