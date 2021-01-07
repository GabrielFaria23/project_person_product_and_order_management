import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  
  person: Person;
  id: number;
  personUpdateForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(){

    this.person = new Person;
    this.id = this.route.snapshot.params['id'];

    this.personService.getPersonById(this.id)
      .subscribe(
        data => {
          this.person = data;
        },
        error => console.log(error)
      );

    this.personUpdateForm = new FormGroup({
      id: this.fb.control("", []),
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      email: this.fb.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      telefone: this.fb.control("",[])
    }, { validators: [PersonUpdateComponent.equalsTo], updateOn: 'change'})

  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value != emailConfirmation.value){
      return{emailsNotMatch:true}
    }
    return undefined
  }

  updatePerson(person: Person){
    this.personService.updatePerson(person)
      .subscribe(
        data=> {
          console.log(data);
          this.router.navigate(['people']);
        }, error => console.log(error)
      )
  }

  cancel(){
    this.router.navigate(['people'])
  }
}
