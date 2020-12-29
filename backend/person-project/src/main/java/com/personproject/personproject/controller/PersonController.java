package com.personproject.personproject.controller;

import com.personproject.personproject.dto.PersonDTO;
import com.personproject.personproject.exception.PersonNotFoundException;
import com.personproject.personproject.service.PersonService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/v1/people")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PersonController {

    private PersonService personService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PersonDTO createPerson(@RequestBody @Valid PersonDTO personDTO){
        return personService.createPerson(personDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PersonDTO> listaAll(){
        return personService.listAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PersonDTO findById(@PathVariable Long id) throws PersonNotFoundException {
        return personService.findById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PersonDTO updatePerson(@PathVariable long id, @RequestBody @Valid PersonDTO personDTO) throws PersonNotFoundException {
        return personService.updatePerson(id, personDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePerson(@PathVariable long id) throws PersonNotFoundException {
        personService.deletePerson(id);
    }
}
