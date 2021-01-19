import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/person/person.model';
import { Product } from 'src/app/product/product.model';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  orderForm: FormGroup;
  order : Order = new Order;

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

  getPersonToOrder(person: Person){
    console.log(person);
    this.order.person = person;
  }

  getProductToOrder(products: Product[]){
    this.order.products.push(...products);
  }

  saveOrder(order: Order) {
    this.orderService.saveOrder(order).
      subscribe(data => {
        console.log(data)
        this.router.navigate(['/orders'])
      });
  }
}
