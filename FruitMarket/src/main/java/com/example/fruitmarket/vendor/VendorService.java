package com.example.fruitmarket.vendor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fruitmarket.fruit.Fruit;
import com.example.fruitmarket.fruit.FruitRepository;

@Service
public class VendorService {
	@Autowired
	private VendorRepository vendorRepository;

	@Autowired
	private FruitRepository fruitRepository;

	@Autowired
	private VendorFruitRepository vendorFruitRepository;
	
	public List<Vendor> getAllVendors() {
		ArrayList<Vendor> vendors = new ArrayList<>();
		vendorRepository.findAll().forEach(vendors::add);
		return vendors;
	}
	
	public Vendor getVendor(String id) {
		return vendorRepository.findById(id).get();
	}

	public void createVendor(Vendor vendor) {
		vendorRepository.save(vendor);
	}

	public void addFruits(String id, List<Fruit> fruits) {
		Vendor vendor = vendorRepository.findById(id).get();
		fruits.forEach(fruit -> {
			VendorFruit vendorFruit = new VendorFruit();
			vendorFruit.setFruit(fruitRepository.findById(fruit.getId()).get());
			vendorFruit.setVendor(vendor);
			vendorFruitRepository.save(vendorFruit);
		});
	}
}
