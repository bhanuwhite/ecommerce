import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidator } from 'src/app/shared/confirm-validator';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public userLogin!: FormGroup;

  form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z]{1,}")]),
      password: new FormControl('', Validators.required)
    })
  }
  registerUser() {
    this.http.post<string>("http://localhost:3000/users", this.userLogin.value)
      .subscribe(res => {
        alert("Login Successfully")
        this.userLogin.reset();
      })
  }
}


