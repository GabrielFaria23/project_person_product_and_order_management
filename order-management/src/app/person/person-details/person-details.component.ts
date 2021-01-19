import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {  

  id: number;
  person: Person;

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id)
      .subscribe(
        data =>{ 
          this.person = data;
          console.log(this.person);
          
        }, error=> console.log(error)
      )
  }

  goBack(){
    window.history.back();
  }

}
