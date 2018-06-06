package com.example.fruitmarket.vendor;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Vendor {
	@Id
	@Column(name = "VENDOR_ID")
	@GeneratedValue
	private long id;
	private String name;
	private String description;
	
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
	private Set<VendorFruit> vendorFruits = new HashSet<VendorFruit>();

	public Vendor() {
		
	}
	public Vendor(long id, String name, String description, Set<VendorFruit> vendorFruits) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.vendorFruits = vendorFruits;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<VendorFruit> getVendorFruit() {
		return vendorFruits;
	}

	public void setVendorFruit(Set<VendorFruit> vendorFruit) {
		this.vendorFruits = vendorFruit;
	}
	
	public void addVendorFruit(VendorFruit vendorFruit) {
        this.vendorFruits.add(vendorFruit);
    }
}
