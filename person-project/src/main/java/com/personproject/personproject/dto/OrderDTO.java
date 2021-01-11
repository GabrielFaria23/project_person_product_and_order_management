package com.personproject.personproject.dto;

import com.personproject.personproject.model.Person;
import com.personproject.personproject.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDTO {

    private long id;

    @NotEmpty
    @Size(max = 120)
    private Date dateHour;

    @NotEmpty
    private Person person;

    @NotEmpty
    private List<Product> products;
}
