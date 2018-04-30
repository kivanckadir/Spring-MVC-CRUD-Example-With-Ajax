/* This class is interface for Database Access Object's implementing */

package com.infonal.TakeHome.dao;

import java.util.List;

import com.infonal.TakeHome.modal.Person;

public interface PersonDao {

	public void create(Person person);

	public void update(Person person);

	public void delete(Person person);

	public Person findPersonById(String id);

	public List<Person> list();
}
