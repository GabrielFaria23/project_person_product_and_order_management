import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  product: Product;
  id: number;
  productUpdateForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(){

    this.product = new Product;
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id)
      .subscribe(
        data => {
          this.product = data;
        },
        error => console.log(error)
      );

    this.productUpdateForm = new FormGroup({
      id: this.fb.control("", []),
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      lote: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      quantity: this.fb.control("", [Validators.required]),
      manufacturer: this.fb.control("",[Validators.required, Validators.minLength(2)])
    }, { updateOn: 'change'})

  }

  updateproduct(product: Product){
    this.productService.updateProduct(product)
      .subscribe(
        data=> {
          console.log(data);
          this.router.navigate(['products']);
        }, error => console.log(error)
      )
  }

  cancel(){
    this.router.navigate(['products'])
  }
}
