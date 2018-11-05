import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('http://192.168.56.101:8080/customers');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
