import { OrderService } from '../order.service';
import { Order } from '../order';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order = new Order();
  submitted = false;

  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
  }

  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {
    this.orderService
    .createOrder(this.order)
    .subscribe(data => {
      console.log(data)
      this.order = new Order();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/orders']);
  }
}
