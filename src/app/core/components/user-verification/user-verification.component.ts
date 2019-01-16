import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base.component';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../../services/spinner.service';
@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.scss']
})
export class UserVerificationComponent extends BaseComponent implements OnInit {

  constructor(private authService: AuthService, public spinner: SpinnerService, public toastr: ToastrService, public router: Router, public activatedRouter: ActivatedRoute) {
    super(router, activatedRouter, toastr, spinner);
  }

  ngOnInit() {
  }

  sendVerifiedEmail(){
    this.authService.userDetails.sendEmailVerification();
  }
}
