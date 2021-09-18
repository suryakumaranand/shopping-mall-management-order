import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  id: number;
  order: Order;

  constructor(private route: ActivatedRoute,private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
    this.order = new Order();

    this.id = this.route.snapshot.params['id'];
    
    this.orderService.getOrder(this.id)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      }, error => console.log(error));
  }

  updateOrder() {
    this.orderService.updateOrder(this.id, this.order)
      .subscribe(data => {
        console.log(data);
        this.order = new Order();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateOrder();    
  }

  gotoList() {
    this.router.navigate(['/orders']);
  }
}
