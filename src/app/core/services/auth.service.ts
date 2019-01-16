import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private route: Router, private router: ActivatedRoute) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          console.log(user);
          this.userDetails = user;
          localStorage.setItem('currentUser', user.displayName);
          localStorage.setItem('emailVerified', JSON.stringify(user.emailVerified));
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithEmailAndPass(email, pass) {
    let returnUrl = this.router.snapshot.paramMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    var res = this._firebaseAuth.auth.signInWithEmailAndPassword(email, pass);
    return res
  }

  RegisterWithEmailAndPass(email, pass) {
    var res = this._firebaseAuth.auth.createUserWithEmailAndPassword(email, pass);
    return res;
  }

  signInWithTwitter() {
    let returnUrl = this.router.snapshot.paramMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }
  signInWithFacebook() {
    let returnUrl = this.router.snapshot.paramMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
  signInWithGoogle() {
    let returnUrl = this.router.snapshot.paramMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  isVerified(){
    if(JSON.parse(localStorage.getItem('emailVerified'))){
      return true;
    }else{
      return false;
    }
  }

  resetPassword(email){
   return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this._firebaseAuth.auth.signOut()
      .then((res) => this.route.navigate(['/login']));
  }

}
