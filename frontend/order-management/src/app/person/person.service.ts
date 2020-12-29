import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url ='http://localhost:8080/v1';

  constructor(private http: HttpClient) { }

  getPersonList(): Observable<any>{
    return this.http.get(`${this.url}/people`);
  }
}
