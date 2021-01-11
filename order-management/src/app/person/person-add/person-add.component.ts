import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  personForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(private personService: PersonService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      nome: this.fb.control("", [Validators.required, Validators.minLength(2)]),
      cpf: this.fb.control("", [Validators.required, Validators.minLength(11)]),
      rg: this.fb.control("", [Validators.required, Validators.minLength(10)]),
      email: this.fb.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      telefone: this.fb.control("",[])
    }, { validators: [PersonAddComponent.equalsTo], updateOn: 'change'})
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

  cancel(){
    this.router.navigate(['people']);
  }

  savePerson(person: Person) {
    this.personService.savePerson(person).
      subscribe(data => {
        console.log(data)
        this.router.navigate(['/people'])
      });
  }
}
