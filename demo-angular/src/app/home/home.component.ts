import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: Object;

  constructor(private customerService: CustomerService) { }

  ngOnInit() { 
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data
    })
  }
}
