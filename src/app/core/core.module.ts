import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {CommonModule} from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { UserVerificationComponent } from './components/user-verification/user-verification.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './components/register/register.component';
import {AuthService} from '../core/services/auth.service'
import {AuthGuardService} from '../core/services/auth-guard.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ControlMessageComponent } from './components/control-message/control-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import {SpinnerService} from '../core/services/spinner.service';
@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    MDBBootstrapModule.forRoot(),
   // NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot()
  ],
  exports: [NavbarComponent,FooterComponent,ControlMessageComponent,ErrorComponent],
  declarations: [NavbarComponent, FooterComponent, HomeComponent, ErrorComponent,
     LoginComponent, RegisterComponent, ControlMessageComponent, LoadingComponent,
     UserVerificationComponent,ResetPasswordComponent],
  providers: [
    AuthService,
    AuthGuardService,
    SpinnerService,

  ]
})
export class CoreModule {}