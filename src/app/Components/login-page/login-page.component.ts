import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/register-user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userLogin = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private regis: RegisterUserService) { }

  ngOnInit(): void {
  }
  registerUser() {
    console.log(this.userLogin.value);
    this.regis.registerUser(this.userLogin.value).subscribe((res) => {
      console.log("res", res);
    })

  }

}
