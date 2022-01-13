import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    userName: [''],
    password: [''],
    confrimPassword: [''],
  })


  ngOnInit(): void {
  }

}
