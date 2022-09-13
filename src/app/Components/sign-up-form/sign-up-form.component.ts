import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidator } from 'src/app/shared/confirm-validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['',
        [Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z]{1,}")
        ]],
      lastName: ['',
        [Validators.required,
        Validators.pattern("[a-zA-Z]{1,}")]
      ],
      email: ['',
        [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobileNo: ['',
        [Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10)]],
      password: ['',
        [Validators.required,]],
      confirmPassword: ['',
        Validators.required],
    },
      {
        validator: ConfirmValidator("password", "confirmPassword")
      }
    )
  }
  public onSubmit() {
    console.log(this.signUpForm);

  }
}
