package com.personproject.personproject.controller;

import com.personproject.personproject.dto.ProductDTO;
import com.personproject.personproject.exception.ProductNotFoundException;
import com.personproject.personproject.model.Product;
import com.personproject.personproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO){
        return productService.addProduct(productDTO);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO updateProduct(@PathVariable @Valid long id, @RequestBody @Valid ProductDTO productDTO) throws ProductNotFoundException {
        return productService.updateProduct(id, productDTO);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO productById(@PathVariable @Valid long id) throws ProductNotFoundException {
        return productService.productById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> allProducts(){
        return productService.allProducts();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable @Valid long id) throws ProductNotFoundException {
        productService.deleteProduct(id);
    }

}
