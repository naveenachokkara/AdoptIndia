import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';
import { MatToolbar, MatIcon,
   MatMenu, MatToolbarRow, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';


const routes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  // tslint:disable-next-line: max-line-length
  imports: [MatToolbarModule,
    MaterialModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  providers: [],
  exports: [MatSidenavModule,HomeComponent]
})
export class HomeModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule : HomeModule,
  //     providers: []
  //   };
  // }
}
