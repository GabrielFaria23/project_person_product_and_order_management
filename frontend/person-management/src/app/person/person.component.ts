import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people: Observable<Person>;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.people = this.personService.getPersonList();
  }

}
