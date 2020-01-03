import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  uname: any;
  pass: any;
  msg: string;
  status: boolean = false;
  constructor(private s: DataService, private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    uname: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {

  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.uname = this.form.controls['uname'].value;
    this.pass = this.form.controls['password'].value;
    if (this.uname == "admin" && this.pass == "admin") {
      this.router.navigate(['/', 'dash']);
      this.s.sendToken(this.form.value.uname);
    }
    else {
      this.msg = 'Your Username or Password is incorrect';
      this.form.reset();
      this.submitted = false;
      this.status = true;
    }
  }
}
