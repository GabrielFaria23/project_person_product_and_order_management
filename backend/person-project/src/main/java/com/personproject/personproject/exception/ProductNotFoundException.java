package com.personproject.personproject.exception;


public class ProductNotFoundException extends Exception{

    public ProductNotFoundException(long id){
        super("Product with id "+ id +" not founded!");
    }
}
