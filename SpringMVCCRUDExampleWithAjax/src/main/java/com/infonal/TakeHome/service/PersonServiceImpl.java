/* This class is written to directly exchange data with the DAO class. It is necessary for security.*/

package com.infonal.TakeHome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infonal.TakeHome.dao.PersonDao;
import com.infonal.TakeHome.modal.Person;

@Service("personService")
public class PersonServiceImpl implements PersonService {

	@Autowired
	PersonDao personDao;

	public void create(Person person) {
		personDao.create(person);
	}

	public void update(Person person) {
		personDao.update(person);
	}

	public void delete(Person person) {
		personDao.delete(person);
	}

	public Person findPersonById(String id) {
		return personDao.findPersonById(id);
	}

	public List<Person> list() {
		return personDao.list();
	}
}
