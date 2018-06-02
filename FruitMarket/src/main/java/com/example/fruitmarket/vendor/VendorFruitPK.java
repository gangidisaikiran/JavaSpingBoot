package com.example.fruitmarket.vendor;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

import com.example.fruitmarket.fruit.Fruit;

@Embeddable
public class VendorFruitPK  implements Serializable {
	@ManyToOne(cascade = CascadeType.ALL)
	private Fruit fruit;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Vendor vendor;
	
	public VendorFruitPK() {
	}

	public VendorFruitPK(Fruit fruit, Vendor vendor) {
		super();
		this.fruit = fruit;
		this.vendor = vendor;
	}

	public Fruit getFruit() {
		return fruit;
	}

	public void setFruit(Fruit fruit) {
		this.fruit = fruit;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}
	
	
}
