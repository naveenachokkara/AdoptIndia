import { NgModule , ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AuthGuard } from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent}
];
@NgModule({
imports: [
  CommonModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authreducer),
  EffectsModule.forFeature([AuthEffects])
],
declarations: [LoginComponent],
exports: [LoginComponent]
})

export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule : AuthModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
