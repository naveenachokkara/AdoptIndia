import { NgModule , ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { AuthGuard } from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule, MatInputModule,
  MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatCardModule, MatRadioModule
  , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
  MatDividerModule, MatSlideToggleModule, MatListModule
} from '@angular/material';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', component: RegisterComponent},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent}
];
@NgModule({
imports: [
  CommonModule,
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule,
    MatCardModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule,
    MatMenuModule, MatDividerModule, MatSlideToggleModule, MatListModule,
      ReactiveFormsModule,
  RouterModule.forChild(routes),
  StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authreducer),
  EffectsModule.forFeature([AuthEffects])
],
declarations: [LoginComponent, RegisterComponent],
exports: [RegisterComponent]
})

export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule : AuthModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
