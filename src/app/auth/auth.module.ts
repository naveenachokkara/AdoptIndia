import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule,
    MatCardModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule,
    MatMenuModule, MatDividerModule, MatSlideToggleModule, MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authreducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    AuthService],
  exports: [RegisterComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})

export class AuthModule {
}
