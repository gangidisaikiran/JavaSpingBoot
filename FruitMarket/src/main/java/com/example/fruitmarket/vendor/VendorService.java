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
	
	public Vendor getVendor(long id) {
		return vendorRepository.findById(id).get();
	}

	public void createVendor(Vendor vendor) {
		vendorRepository.save(vendor);
	}

	public void addFruits(long id, List<VendorFruit> vendorFruits) {
		Vendor vendor = vendorRepository.findById(id).get();
		vendorFruits.forEach(vendorFruit -> {
			vendorFruit.setFruit(fruitRepository.findById(vendorFruit.getFruit().getId()).get());
			vendorFruit.setVendor(vendor);
			vendorFruitRepository.save(vendorFruit);
		});
	}
}
