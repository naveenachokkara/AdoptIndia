import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';
import { MatToolbar, MatIcon, MatMenu, MatToolbarRow, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';


const routes: Routes = [
  {path: '', component: HomeComponent}
];
@NgModule({
  imports: [MatToolbarModule , MatIconModule ,MatMenuModule, RouterModule.forChild(routes)],
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
