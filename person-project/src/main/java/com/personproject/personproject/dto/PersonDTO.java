package com.personproject.personproject.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PersonDTO {

    private long id;

    @NotEmpty
    @Size(max = 120)
    private String nome;

    @NotEmpty
    @Size(max = 200)
    private String email;

    @Size(max = 200)
    private String telefone;
}
