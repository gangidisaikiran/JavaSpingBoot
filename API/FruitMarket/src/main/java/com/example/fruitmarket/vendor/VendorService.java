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

	public Vendor createVendor(Vendor vendor) {
		Vendor newVendor = vendorRepository.save(vendor);
		return newVendor;
	}

	public Iterable<VendorFruit> addFruits(long id, List<VendorFruit> vendorFruits) {
		Vendor vendor = vendorRepository.findById(id).get();
		ArrayList<VendorFruit> newVendorFruits = new ArrayList<VendorFruit>();
		vendorFruits.forEach(vendorFruit -> {
			vendorFruit.setFruit(fruitRepository.findById(vendorFruit.getFruit().getId()).get());
			vendorFruit.setVendor(vendor);
			newVendorFruits.add(vendorFruit);
		});
		return vendorFruitRepository.saveAll(newVendorFruits);
	}

	public Iterable<VendorFruit> buyFruits(long id, long fruitId, int quantity) {
		Fruit fruit = fruitRepository.findById(fruitId).get();
		Vendor vendor = vendorRepository.findById(id).get();
		ArrayList<VendorFruit> vendorFruitList = new ArrayList<VendorFruit>(vendorFruitRepository.findByFruitAndVendor(fruit, vendor));
		if (vendorFruitList.size() > 0)
		{
			VendorFruit vendorFruit = vendorFruitList.get(0);
			vendorFruit.setQuantity(vendorFruit.getQuantity() + quantity);
			vendorFruitRepository.save(vendorFruit);
		}
		return null;
	}
	
	public Iterable<VendorFruit> sellFruits(long id, long fruitId, int quantity) throws Exception {
		Fruit fruit = fruitRepository.findById(fruitId).get();
		Vendor vendor = vendorRepository.findById(id).get();
		ArrayList<VendorFruit> vendorFruitList = new ArrayList<VendorFruit>(vendorFruitRepository.findByFruitAndVendor(fruit, vendor));
		if (vendorFruitList.size() > 0)
		{
			VendorFruit vendorFruit = vendorFruitList.get(0);
			if (vendorFruit.getQuantity() < quantity)
			{
				throw new Exception("Value exceeds existing quantity");
			}
			vendorFruit.setQuantity(vendorFruit.getQuantity() - quantity);
			vendorFruitRepository.save(vendorFruit);
		}
		return null;
	}

}
