import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url ='http://localhost:8080/v1';

  constructor(private http: HttpClient) { }

  getOrderList(): Observable<any>{
    return this.http.get(`${this.url}/orders`);
  }

  saveOrder(product: Order): Observable<any>{
    return this.http.post<Order>(`${this.url}/orders`,product);
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete(`${this.url}/orders/${id}`, {responseType: 'text'})
  }

  getOrderById(id:number): Observable<any>{
    return this.http.get(`${this.url}/orders/${id}`);
  }

  updateOrder(product: Order): Observable<any>{
    return this.http.put(`${this.url}/orders/${product.id}`, product);
  }
}
