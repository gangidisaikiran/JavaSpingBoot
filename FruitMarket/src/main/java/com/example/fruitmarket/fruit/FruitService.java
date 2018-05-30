package com.example.fruitmarket.fruit;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FruitService {

	@Autowired
	private FruitRepository fruitRepository;
	
	public List<Fruit> getAllFruits() {
		List<Fruit> fruits = new ArrayList<>();
		fruitRepository.findAll()
		.forEach(fruits::add);
		return fruits;
	}

	public Fruit getFruit(String id) {
		return fruitRepository.findById(id).get();
		
	}

	public void addFruit(Fruit fruit) {
		fruitRepository.save(fruit);
	}

	public void deleteFruit(String id) {
		fruitRepository.deleteById(id);
	}

	public void updateFruit(Fruit fruit) {
		fruitRepository.save(fruit);
	}
}
