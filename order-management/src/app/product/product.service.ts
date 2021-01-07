import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url ='http://localhost:8080/v1';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any>{
    return this.http.get(`${this.url}/products`);
  }

  saveProduct(product: Product): Observable<any>{
    return this.http.post<Product>(`${this.url}/products`,product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.url}/products/${id}`, {responseType: 'text'})
  }

  getProductById(id:number): Observable<any>{
    return this.http.get(`${this.url}/products/${id}`);
  }

  updateProduct(product: Product): Observable<any>{
    return this.http.put(`${this.url}/products/${product.id}`, product);
  }
}
