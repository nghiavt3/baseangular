import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {SpinnerService} from '../../services/spinner.service';
import {BaseComponent} from '../base.component';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  email = new FormControl('', Validators.email);
  constructor(private authService: AuthService,public router: Router,
    public activatedRouter: ActivatedRoute, public toastr: ToastrService,public spinner: SpinnerService) { 
      super(router,activatedRouter,toastr,spinner);
    }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.resetPassword(this.email.value).then((res)=> {
      // Email sent.
      this.showSuccessWithTimeout('Reset password link have been sent to your email.Please check your email','Reset Password',5000);
    }).catch((error) => {
      // An error happened.
      this.showError(error,'Reset Password Error:')
    });
  }

}
