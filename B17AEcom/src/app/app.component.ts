import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B17AEcom';
  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    firstName: [''],
  })
}
