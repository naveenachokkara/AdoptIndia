import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
  providers: [],
  exports: [DashboardComponent]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule : HomeModule,
      providers: []
    };
  }
}
