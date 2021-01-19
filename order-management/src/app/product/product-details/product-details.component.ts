import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {  

  id: number;
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id)
      .subscribe(
        data =>{ 
          this.product = data;
          console.log(this.product);
          
        }, error=> console.log(error)
      )
  }

  goBack(){
    window.history.back();
  }

}
