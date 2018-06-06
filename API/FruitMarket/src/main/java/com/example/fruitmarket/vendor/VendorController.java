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
@RequestMapping("/vendor")

public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	@RequestMapping(method = RequestMethod.GET, value = "")
	public List<Vendor> getAll() {
		return vendorService.getAllVendors();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Vendor get(@PathVariable long id) {
		return vendorService.getVendor(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "")
	public Vendor create(@RequestBody Vendor vendor) {
		return vendorService.createVendor(vendor);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/{id}/addFruits")
	public void addFruits(@RequestBody List<VendorFruit> fruits, @PathVariable long id) {
		vendorService.addFruits(id, fruits);
	}

}
