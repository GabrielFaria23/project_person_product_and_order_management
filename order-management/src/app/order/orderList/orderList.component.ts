import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Observable<Order[]>;
  listOrders : Order[] = [];

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {    
    this.reloadData();
  }

  reloadData(){
    this.orders = this.orderService.getOrderList();
    this.orders.subscribe(
      data => {
        this.listOrders = data
      }, error => console.log(error)  
    )
    console.log(this.listOrders.length);
  }

  addOrder(){
    this.router.navigate(['orders/add']);
  }

  editOrder(id: number){
    this.router.navigate(['orders/update',id]);
  }

  detailsOrder(id: number){
    this.router.navigate(['orders/details',id]);
  }

  deleteOrder(id: number){
    this.orderService.deleteOrder(id)
    .subscribe(
        data=>{
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      )
      
  }

}
