import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signIn: FormGroup;

  constructor(private fb: FormBuilder, private _accountServices: AccountService, private router: Router) { }

  ngOnInit() {
    this.signIn = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  doSignIn(event) {
    this._accountServices.doSignIn(this.signIn.value).subscribe(result => {
      if (result.success) {
        localStorage.setItem('token', result.token);
        this.router.navigate(['/app/dashboard']);
      }
      else {
        alert("unable to login");
      }
    });

  }

}
