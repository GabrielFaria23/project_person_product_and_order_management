package com.personproject.personproject.service;

import com.personproject.personproject.dto.ProductDTO;
import com.personproject.personproject.exception.ProductNotFoundException;
import com.personproject.personproject.mapper.ProductMapper;
import com.personproject.personproject.model.Product;
import com.personproject.personproject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    ProductMapper productMapper = ProductMapper.INSTANCE;

    public ProductDTO addProduct(ProductDTO productDTO){
        Product productToSave = productMapper.toModel(productDTO);
        Product productSaved = productRepository.save(productToSave);
        return productMapper.toDTO(productSaved);
    }

    public ProductDTO updateProduct(long id, ProductDTO productDTO) throws ProductNotFoundException {
        Product productToUpdate = verifyIfExists(id);
        productToUpdate.setNome(productDTO.getNome());
        productToUpdate.setLote(productDTO.getLote());
        productToUpdate.setQuantidade(productDTO.getQuantidade());
        productToUpdate.setFabricante(productDTO.getFabricante());
        Product productUpdated = productRepository.save(productToUpdate);
        return productMapper.toDTO(productToUpdate);
    }

    public ProductDTO productById(long id) throws ProductNotFoundException {
        return productMapper.toDTO(verifyIfExists(id));
    }

    public List<ProductDTO> allProducts(){
        return productRepository.findAll()
                .stream().map(product -> productMapper.toDTO(product))
                .collect(Collectors.toList());
    }

    public void deleteProduct(long id) throws ProductNotFoundException {
        Product productToDelete = verifyIfExists(id);
        productRepository.delete(productToDelete);
    }

    public Product verifyIfExists(long id) throws ProductNotFoundException {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }
}
