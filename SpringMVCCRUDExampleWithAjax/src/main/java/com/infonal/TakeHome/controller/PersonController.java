/*This class provides the connection between the server side and the client side.*/

package com.infonal.TakeHome.controller;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.infonal.TakeHome.modal.Person;
import com.infonal.TakeHome.service.PersonService;

@Controller
@RequestMapping(value = "/")
public class PersonController {

	@Autowired
	PersonService personService;

	@RequestMapping(value = "/list")
	public @ResponseBody String list() {
		Gson gson = new Gson();
		List<Person> list = personService.list();
		String jsonString = gson.toJson(list);
		return jsonString;
	}

	@RequestMapping(value = "/delete_")
	public @ResponseBody String del(@RequestParam(name = "id") String id,
			@RequestParam(name = "firstName") String firstName, @RequestParam(name = "lastName") String lastName,
			@RequestParam(name = "phoneNumber") String phoneNumber) throws JSONException {
		JSONObject jsonObject = new JSONObject();
		String msg = "The record has been successfully deleted.";
		personService.delete(new Person(id, firstName, lastName, phoneNumber));
		jsonObject.put("msg", msg);
		String jsonString = jsonObject.toString();
		return jsonString;
	}

	@RequestMapping(value = "/add_")
	public @ResponseBody String save(@RequestParam(name = "firstName") String firstName,
			@RequestParam(name = "lastName") String lastName, @RequestParam(name = "phoneNumber") String phoneNumber)
			throws JSONException {
		JSONObject jsonObject = new JSONObject();
		String msg = "The record has been successfully added.";
		personService.create(new Person(firstName, lastName, phoneNumber));
		jsonObject.put("msg", msg);
		String jsonString = jsonObject.toString();
		return jsonString;
	}

	@RequestMapping(value = "/edit_")
	public @ResponseBody String save(@RequestParam(name = "id") String id,
			@RequestParam(name = "firstName") String firstName, @RequestParam(name = "lastName") String lastName,
			@RequestParam(name = "phoneNumber") String phoneNumber) throws JSONException {
		JSONObject jsonObject = new JSONObject();
		String msg = "The record has been successfully updated.";
		personService.delete(personService.findPersonById(id));
		personService.create(new Person(firstName, lastName, phoneNumber));
		jsonObject.put("msg", msg);
		String jsonString = jsonObject.toString();
		return jsonString;
	}
}
