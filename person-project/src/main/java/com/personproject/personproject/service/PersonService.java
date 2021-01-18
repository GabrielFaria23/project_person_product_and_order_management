package com.personproject.personproject.service;

import com.personproject.personproject.mapper.PersonMapper;
import com.personproject.personproject.dto.PersonDTO;
import com.personproject.personproject.exception.PersonNotFoundException;
import com.personproject.personproject.model.Person;
import com.personproject.personproject.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class PersonService {

    private PersonRepository personRepository;

    private final PersonMapper personMapper = PersonMapper.INSTANCE;

    public PersonDTO createPerson(PersonDTO personDTO){
        Person personToSave = personMapper.toModel(personDTO);
        personRepository.save(personToSave);
        return personMapper.toDTO(personToSave);
    }

    public List<PersonDTO> listAll(){
        List<Person> people = personRepository.findAll();
        return people.stream().map(personMapper::toDTO).collect(Collectors.toList());
    }

    public PersonDTO findById (long id) throws PersonNotFoundException {
        return personMapper.toDTO(verifyIfExists(id));
    }

    public PersonDTO findByCpf(String cpf) {
        return personMapper.toDTO(personRepository.findByCpf(cpf));
    }

    public PersonDTO updatePerson(long id, PersonDTO personDTO) throws PersonNotFoundException {
        Person personToUpdate = verifyIfExists(id);
        personToUpdate.setNome(personDTO.getNome());
        personToUpdate.setCpf(personDTO.getCpf());
        personToUpdate.setRg(personDTO.getRg());
        personToUpdate.setEmail(personDTO.getEmail());
        personToUpdate.setTelefone(personDTO.getTelefone());
        personRepository.save(personToUpdate);
        return personMapper.toDTO(personToUpdate);
    }

    public void deletePerson(long id) throws PersonNotFoundException {
        Person personToDelete = verifyIfExists(id);
        personRepository.delete(personToDelete);
    }

    public Person verifyIfExists(long id) throws PersonNotFoundException {
        return personRepository.findById(id).orElseThrow(() -> new PersonNotFoundException(id));
    }

}
