package com.example.fruitmarket.vendor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.fruitmarket.fruit.Fruit;

public interface VendorFruitRepository extends CrudRepository<VendorFruit, Long>{
	List<VendorFruit> findByFruitAndVendor(Fruit fruit, Vendor vendor);
}
