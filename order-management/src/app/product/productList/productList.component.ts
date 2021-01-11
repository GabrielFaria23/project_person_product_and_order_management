import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;
  listProducts : Product[] = [];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {    
    this.reloadData();
  }

  reloadData(){
    this.products = this.productService.getProductList();
    this.products.subscribe(
      data => {
        this.listProducts = data
      }, error => console.log(error)  
    )
  }

  addProduct(){
    this.router.navigate(['products/add']);
  }

  editProduct(id: number){
    this.router.navigate(['products/update',id]);
  }

  detailsProduct(id: number){
    this.router.navigate(['products/details',id]);
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .subscribe(
        data=>{
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      )
      
  }

}
