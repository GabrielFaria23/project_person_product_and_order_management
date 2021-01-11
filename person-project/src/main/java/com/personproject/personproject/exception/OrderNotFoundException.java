package com.personproject.personproject.exception;

public class OrderNotFoundException extends Exception {
    public OrderNotFoundException(long id) {
        super("Order with id "+ id + " not founded");
    }
}
