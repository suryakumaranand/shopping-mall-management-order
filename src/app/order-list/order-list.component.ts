import { OrderDetailsComponent } from './../order-details/order-details.component';
import { Observable } from "rxjs";
import { OrderService } from "./../order.service";
import { Order } from "./../order";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private orderService: OrderService,private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getOrderList();
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  orderDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateOrder(id: number){
    this.router.navigate(['update', id]);
  }
}
