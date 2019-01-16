import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {SpinnerService} from '../services/spinner.service';
export abstract class BaseComponent {
    constructor(
        public router: Router,
        public activatedRouter: ActivatedRoute, public toastr: ToastrService,public spinner: SpinnerService) { }

        showSpinner(){
            this.spinner.show();
        }

        showToaster(){
            this.toastr.success("Hello, I'm the toastr message.")
        }
        showSuccessWithTimeout(message, title, timespan){  
            this.toastr.success(message, title ,{
                timeOut :  timespan
            })
        }
        showError(message,title){
            this.toastr.error(message,title);
        }
        showHTMLMessage(message, title){  
            this.toastr.success(message, title, {
                enableHtml :  true
            })
        }

        // showHtmlToaster(){  
        //     this.notifyService.showHTMLMessage("<h2>Data shown successfully !!</h2>", "Notification")
        // }
      
}