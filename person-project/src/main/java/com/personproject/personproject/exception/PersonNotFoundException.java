package com.personproject.personproject.exception;

public class PersonNotFoundException extends Exception {
    public PersonNotFoundException(long id) {
        super("Person with id "+ id + " not founded");
    }
    public  PersonNotFoundException(String cpf) {
        super("Person with CPF "+ cpf +" not founded");
    }
}
