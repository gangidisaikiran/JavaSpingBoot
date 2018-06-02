package com.example.fruitmarket.fruit;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.fruitmarket.vendor.VendorFruit;

@Entity
public class Fruit {
	
	@Id
	@Column(name = "FRUIT_ID")
	private String id;
	private String name;
		
	public Fruit(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Fruit() {
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
