package com.example.fruitmarket.vendor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.fruitmarket.fruit.Fruit;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	@RequestMapping("/vendor")
	public List<Vendor> getAll() {
		return vendorService.getAllVendors();
	}
	
	@RequestMapping("/vendor/{id}")
	public Vendor get(@PathVariable String id) {
		return vendorService.getVendor(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/vendor")
	public void create(@RequestBody Vendor vendor) {
		vendorService.createVendor(vendor);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/vendor/{id}")
	public void addFruits(@RequestBody List<Fruit> fruits, @PathVariable String id) {
		vendorService.addFruits(id, fruits);
	}

}
