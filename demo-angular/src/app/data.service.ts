import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
  }

  getCustomers() {
    return this.http.get('http://192.168.56.101:8080/customers')
  }

  logClick() {
    return console.log('clicked');
  }

}
