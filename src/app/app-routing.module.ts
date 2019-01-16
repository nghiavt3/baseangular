import { NgModule } from '@angular/core';
import { HomeComponent } from '../app/core/components/home/home.component';
import { LoginComponent } from '../app/core/components/login/login.component';
import { RegisterComponent } from '../app/core/components/register/register.component';
import { UserVerificationComponent } from '../app/core/components/user-verification/user-verification.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../app/core/services/auth-guard.service';
import { VerifiedGuardService } from '../app/core/services/verified-guard.service';
import { UnAuthService } from '../app/core/services/un-auth.service';
import { ResetPasswordComponent } from '../app/core/components/reset-password/reset-password.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService, VerifiedGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [UnAuthService] },
  { path: 'register', component: RegisterComponent, canActivate: [UnAuthService] },
  { path: 'reset', component: ResetPasswordComponent, canActivate: [UnAuthService] },
  { path: 'verification', component: UserVerificationComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
