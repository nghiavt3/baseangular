import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base.component';
import { ToastrService } from 'ngx-toastr';
import {SpinnerService} from '../../services/spinner.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(private authService: AuthService,public spinner: SpinnerService,public toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRouter: ActivatedRoute ) {
    super(router, activatedRouter,toastr,spinner);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'] || '/';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('email') || '', Validators.compose([Validators.required, Validators.maxLength(160)])],
      password: [localStorage.getItem('password') || '', Validators.required],
      remember: [false]
    });
  }
  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate([this.returnUrl]);
      })
      .catch((err) => this.showError(err,'Login Error'));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate([this.returnUrl]);
      })
      .catch((err) => this.showError(err,'Login Error'));
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => {
        this.router.navigate([this.returnUrl]);
      })
      .catch((err) => this.showError(err,'Login Error'));
  }

  onSubmit() {
    this.spinner.show();
    this.authService.signInWithEmailAndPass(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .then((res) => {
        this.spinner.hide();
        this.router.navigate([this.returnUrl]);
      })
      .catch((err) => {
        this.showError(err,'Login Error');
        this.spinner.hide();
      });
  }

  remember(e) {
    console.log('processing remember.....')
    console.log(e)
    if (e.checked) {
      localStorage.setItem('email', this.loginForm.get('email').value);
      localStorage.setItem('password', this.loginForm.get('password').value);
    }
  }
}
