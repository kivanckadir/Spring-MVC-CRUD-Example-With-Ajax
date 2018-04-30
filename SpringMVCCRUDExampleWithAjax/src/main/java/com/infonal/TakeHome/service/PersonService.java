/* This class is interface for Service Class's implementing */

package com.infonal.TakeHome.service;

import java.util.List;

import com.infonal.TakeHome.modal.Person;

public interface PersonService {

	public void create(Person person);

	public void update(Person person);

	public void delete(Person person);

	public Person findPersonById(String id);

	public List<Person> list();
}
