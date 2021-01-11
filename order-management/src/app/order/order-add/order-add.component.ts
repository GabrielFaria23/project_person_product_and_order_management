import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private orderService: OrderService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      lote: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      quantity: this.fb.control("", [Validators.required]),
      manufacturer: this.fb.control("",[Validators.required, Validators.minLength(2)])
    }, {updateOn: 'change'})
  }

  cancel(){
    this.router.navigate(['orders']);
  }

  saveOrder(order: Order) {
    this.orderService.saveOrder(order).
      subscribe(data => {
        console.log(data)
        this.router.navigate(['/orders'])
      });
  }
}
