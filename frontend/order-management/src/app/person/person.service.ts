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

  savePerson(person: Person): Observable<any>{
    return this.http.post<Person>(`${this.url}/people`,person);
  }

  deletePerson(id: number): Observable<any>{
    return this.http.delete(`${this.url}/people/${id}`, {responseType: 'text'})
  }

  getPersonById(id:number): Observable<any>{
    return this.http.get(`${this.url}/people/${id}`);
  }

  updatePerson(person: Person): Observable<any>{
    return this.http.put(`${this.url}/people/${person.id}`, person);
  }
}
