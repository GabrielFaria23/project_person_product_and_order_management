package com.personproject.personproject.exception;

public class PersonNotFoundException extends Exception {
    public PersonNotFoundException(long id) {
        super("Person with id "+ id + " not founded");
    }
}
