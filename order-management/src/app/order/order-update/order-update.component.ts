import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {
  
  order: Order;
  id: number;
  orderUpdateForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(){

    this.order = new Order;
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrderById(this.id)
      .subscribe(
        data => {
          this.order = data;
        },
        error => console.log(error)
      );

    this.orderUpdateForm = new FormGroup({
      id: this.fb.control("", []),
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      lote: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      quantity: this.fb.control("", [Validators.required]),
      manufacturer: this.fb.control("",[Validators.required, Validators.minLength(2)])
    }, { updateOn: 'change'})

  }

  updateOrder(order: Order){
    this.orderService.updateOrder(order)
      .subscribe(
        data=> {
          console.log(data);
          this.router.navigate(['orders']);
        }, error => console.log(error)
      )
  }

  cancel(){
    this.router.navigate(['orders'])
  }
}
