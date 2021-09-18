import { OrderDetailsComponent } from './order-details/order-details.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'add', component: CreateOrderComponent },
  { path: 'update/:id', component: UpdateOrderComponent },
  { path: 'details/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
