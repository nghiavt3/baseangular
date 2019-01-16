import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base.component';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl:string;
  constructor(private authService: AuthService,public spinner: SpinnerService,public toastr: ToastrService, public router: Router, private fb: FormBuilder, public activatedRouter: ActivatedRoute ) {
    super(router, activatedRouter,toastr,spinner);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'] || '/';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.maxLength(160)])],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.authService.RegisterWithEmailAndPass(email,password)
    .then((res) =>{
      this.showSuccessWithTimeout('Creating account successfully!','New Account',5000);
       this.router.navigate(['/login']);
    })
    .catch((err) => {
      this.showError(err,'Register Account Error:')
    });
    
  };

}
