package com.personproject.personproject.mapper;

import com.personproject.personproject.dto.OrderDTO;
import com.personproject.personproject.dto.PersonDTO;
import com.personproject.personproject.model.Order;
import com.personproject.personproject.model.Person;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface OrderMapper {

    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    Order toModel(OrderDTO orderDTO);

    OrderDTO toDTO(Order order);
}
