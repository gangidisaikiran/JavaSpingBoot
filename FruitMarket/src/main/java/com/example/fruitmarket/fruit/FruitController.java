package com.example.fruitmarket.fruit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Fruits")
public class FruitController {
	
	@Autowired
	private FruitService fruitService;
	
	@RequestMapping(method = RequestMethod.GET, value = "")
	public List<Fruit> getAllFruits() {
		return fruitService.getAllFruits();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Fruit getFruit(@PathVariable long id) {
		return fruitService.getFruit(id);
	}
	
	@RequestMapping(method= RequestMethod.POST, value = "")
	public void addFruit(@RequestBody Fruit fruit) {
		fruitService.addFruit(fruit);
	}
	
	@RequestMapping(method= RequestMethod.PUT, value = "")
	public void updateFruit(@RequestBody Fruit fruit) {
		fruitService.updateFruit(fruit);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value = "/{id}")
	public void deleteFruit(@PathVariable long id) {
		fruitService.deleteFruit(id);
	}

}
