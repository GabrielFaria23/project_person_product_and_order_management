import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      lote: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      quantidade: this.fb.control("", [Validators.required]),
      fabricante: this.fb.control("",[Validators.required, Validators.minLength(2)])
    }, {updateOn: 'change'})
  }

  cancel(){
    this.router.navigate(['products']);
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product).
      subscribe(data => {
        console.log(data)
        this.router.navigate(['/products'])
      });
  }
}
