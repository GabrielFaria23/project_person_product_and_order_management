import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {  

  id: number;
  order: Order;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id)
      .subscribe(
        data =>{ 
          this.order = data;
          console.log(this.order);
          
        }, error=> console.log(error)
      )
  }

  BackToList(){
    this.router.navigate(['orders'])
  }

}
