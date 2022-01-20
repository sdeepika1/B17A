import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url = 'https://bookcart.azurewebsites.net/api/user/validateUserName'

constructor(private http : HttpClient) { }

userNameAvail(Name : any)  {
  this.url = 'https://bookcart.azurewebsites.net/api/user/validateUserName/' + Name
  return this.http.get(this.url)
}



}
