/* This class is written to directly exchange data with the database. */

package com.infonal.TakeHome.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.infonal.TakeHome.modal.Person;

@Repository("personDao")
public class PersonDaoImpl implements PersonDao {

	@Autowired
	MongoTemplate mongoTemplate;

	private static final String COLLECTION_NAME = "person";

	public void create(Person person) {
		if (!mongoTemplate.collectionExists(Person.class)) {
			mongoTemplate.createCollection(Person.class);
		}
		mongoTemplate.insert(person, COLLECTION_NAME);
	}

	public void update(Person person) {
		mongoTemplate.save(person, COLLECTION_NAME);
	}

	public void delete(Person person) {
		mongoTemplate.remove(person, COLLECTION_NAME);
	}

	public Person findPersonById(String id) {
		return mongoTemplate.findById(id, Person.class);
	}

	public List<Person> list() {
		return mongoTemplate.findAll(Person.class, COLLECTION_NAME);
	}
}
