package com.example.fruitmarket.vendor;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import com.example.fruitmarket.fruit.Fruit;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class VendorFruit {
	@Id
	@GeneratedValue
	private long id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "VENDOR_ID")
	@JsonIgnore
	private Vendor vendor;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "FRUIT_ID")
	private Fruit fruit;

	
	public VendorFruit() {
		
	}
	
	public VendorFruit(long id, Vendor vendor, Fruit fruit) {
		super();
		this.id = id;
		this.vendor = vendor;
		this.fruit = fruit;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public Fruit getFruit() {
		return fruit;
	}

	public void setFruit(Fruit fruit) {
		this.fruit = fruit;
	}

}
