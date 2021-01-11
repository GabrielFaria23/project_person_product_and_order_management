import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './personList.component.html',
  styleUrls: ['./personList.component.css']
})
export class PersonListComponent implements OnInit {

  people: Person[] = [];

  constructor(private personService: PersonService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.personService.getPersonList().subscribe(
      data => this.people = data,
      error => console.log(error)
    )
  }

  addPerson(){
    this.router.navigate(['people/add']);
  }

  editPerson(id: number){
    this.router.navigate(['people/update',id]);
  }

  detailsPerson(id: number){
    this.router.navigate(['people/details',id]);
  }

  deletePerson(id: number){
    this.personService.deletePerson(id)
    .subscribe(
        data=>{
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      )
      
  }

}
