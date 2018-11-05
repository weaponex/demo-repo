import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  strText: string="Ping!";
  h1Style: boolean=false;
  customers: Object;

  constructor(private data: DataService) { }

  ngOnInit() { 
    this.data.getCustomers().subscribe(data => {
      this.customers = data})
  }

  toggle() {
    this.data.logClick();
    
    if (this.strText=="Ping!") {
      console.log(this.strText);
      this.strText="Pong";
      this.h1Style=true;
    } else {
      console.log(this.strText);
      this.strText="Ping!";
      this.h1Style=false;
    }
  }
}
