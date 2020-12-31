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
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @Column(name = "nome")
    private String nome;

    @NotNull
    @Column(name = "lote")
    private String lote;

    @NotNull
    @Column(name = "quantidade")
    private long quantidade;

    @NotNull
    @Column(name = "fabricante")
    private String fabricante;

}
