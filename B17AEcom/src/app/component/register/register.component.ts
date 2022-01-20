import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, RequiredValidator, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword = true;
  showConfirmPassword = true;
  registerForm!: FormGroup;
  Name: boolean = false
  
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private api : ApiService) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName:['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    }, {
      validators: this.confirmPasswordValue
    });
  }

  confirmPasswordValue(control : AbstractControl){
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;
    if (password !== confirmPassword){
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true});
    }
  }

  onSubmit(){
    this.http.post<any>('https://bookcart.azurewebsites.net/api/user', this.registerForm.value)
    .subscribe((res:any)=>{
    })
  }


  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('firstName');
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  userNameAvail() {
    let valueGetter = this.registerForm.value.userName
    this.api.userNameAvail(valueGetter).subscribe((resp: any) => {
      this.Name = resp
    })
  }


}


