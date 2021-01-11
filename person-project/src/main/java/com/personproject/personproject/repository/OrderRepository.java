package com.personproject.personproject.repository;

import com.personproject.personproject.model.Order;
import com.personproject.personproject.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> { }
