package com.personproject.personproject.service;

import com.personproject.personproject.dto.OrderDTO;
import com.personproject.personproject.dto.PersonDTO;
import com.personproject.personproject.exception.OrderNotFoundException;
import com.personproject.personproject.exception.PersonNotFoundException;
import com.personproject.personproject.mapper.OrderMapper;
import com.personproject.personproject.mapper.PersonMapper;
import com.personproject.personproject.model.Order;
import com.personproject.personproject.model.Person;
import com.personproject.personproject.repository.OrderRepository;
import com.personproject.personproject.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class OrderService {

    private OrderRepository orderRepository;

    private final OrderMapper orderMapper = OrderMapper.INSTANCE;

    public OrderDTO createOrder(OrderDTO orderDTO){
        Order orderToSave = orderMapper.toModel(orderDTO);
        orderRepository.save(orderToSave);
        return orderMapper.toDTO(orderToSave);
    }

    public List<OrderDTO> listAll(){
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(orderMapper::toDTO).collect(Collectors.toList());
    }

    public OrderDTO findById (long id) throws OrderNotFoundException {
        return orderMapper.toDTO(verifyIfExists(id));
    }

    public OrderDTO updateOrder(long id, OrderDTO orderDTO) throws OrderNotFoundException {
        Order orderToUpdate = verifyIfExists(id);
        orderToUpdate.setDateHour(orderDTO.getDateHour());
        orderToUpdate.setPerson(orderDTO.getPerson());
        orderToUpdate.setProducts(orderDTO.getProducts());
        orderRepository.save(orderToUpdate);
        return orderMapper.toDTO(orderToUpdate);
    }

    public void deleteOrder(long id) throws OrderNotFoundException {
        Order orderToDelete = verifyIfExists(id);
        orderRepository.delete(orderToDelete);
    }

    public Order verifyIfExists(long id) throws OrderNotFoundException {
        return orderRepository.findById(id).orElseThrow(() -> new OrderNotFoundException(id));
    }
}
