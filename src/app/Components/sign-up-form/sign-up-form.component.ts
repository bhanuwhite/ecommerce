import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public SignUpForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.SignUpForm = this.formBuilder.group({
      firstName: ['',
        [Validators.required,
        Validators.minLength(4),
        Validators.pattern("/^[A-Za-z]+([\ A-Za-z]+)*/")
        ]],
      lastName: ['',
        [Validators.required,
        Validators.pattern("/^[A-Za-z]+([\ A-Za-z]+)*/")

        ]
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
        Validators: this.MustMatch('password', 'confirmPassword')
      })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {

  }
  public onSubmit() {
    this.submitted = true
    if (this.SignUpForm.invalid) {
      return;
    }
    alert("Success")
  }
  MustMatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmcontrol = formGroup.controls[confirmPassword];

      if (confirmPassword.errors && !confirmPassword.errors['MustMatch']) {
        return;
      }
      if (passwordcontrol.value !== confirmcontrol.value) {
        confirmPassword.setErrors({ MustMatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }

}
