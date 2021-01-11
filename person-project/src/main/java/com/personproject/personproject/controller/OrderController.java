package com.personproject.personproject.controller;

import com.personproject.personproject.dto.OrderDTO;
import com.personproject.personproject.dto.PersonDTO;
import com.personproject.personproject.exception.OrderNotFoundException;
import com.personproject.personproject.exception.PersonNotFoundException;
import com.personproject.personproject.service.OrderService;
import com.personproject.personproject.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/orders")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class OrderController {

    private OrderService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrderDTO createOrder(@RequestBody @Valid OrderDTO orderDTO){
        return orderService.createOrder(orderDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<OrderDTO> listaAll(){
        return orderService.listAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public OrderDTO findById(@PathVariable Long id) throws OrderNotFoundException {
        return orderService.findById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public OrderDTO updateOrder(@PathVariable long id, @RequestBody @Valid OrderDTO orderDTO) throws OrderNotFoundException {
        return orderService.updateOrder(id, orderDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable long id) throws OrderNotFoundException {
        orderService.deleteOrder(id);
    }
}
