package com.personproject.personproject.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "Product_table")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String nome;

    @NotNull
    private String lote;

    @NotNull
    private long Quantity;

    @NotNull
    private String manufacturer;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

}
