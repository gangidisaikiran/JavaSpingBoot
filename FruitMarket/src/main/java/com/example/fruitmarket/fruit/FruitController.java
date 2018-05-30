package com.example.fruitmarket.fruit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FruitController {
	
	@Autowired
	private FruitService fruitService;
	
	@RequestMapping("/Fruits")
	public List<Fruit> getAllFruits() {
		return fruitService.getAllFruits();
	}
	
	@RequestMapping("/Fruits/{id}")
	public Fruit getFruit(@PathVariable String id) {
		return fruitService.getFruit(id);
	}
	
	@RequestMapping(method= RequestMethod.POST, value = "/Fruits")
	public void addFruit(@RequestBody Fruit fruit) {
		fruitService.addFruit(fruit);
	}
	
	@RequestMapping(method= RequestMethod.PUT, value = "/Fruits")
	public void updateFruit(@RequestBody Fruit fruit) {
		fruitService.updateFruit(fruit);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value = "/Fruits/{id}")
	public void deleteFruit(@PathVariable String id) {
		fruitService.deleteFruit(id);
	}

}
