package io.guzman.springbootdemo.customer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CustomerService {
	
	private List<Customer> customers = new ArrayList <> (Arrays.asList(
			new Customer("ID1","John", "Doe", "416-555-5555"),
			new Customer("ID2","Jane", "Doe", "905-555-5555"),
			new Customer("ID3","Jim", "Bob", "289-555-5555")
			));
	
	public List<Customer> getCustomers(){
		return customers;
	}
	
	public Customer getCustomer(String id) {
		//Lambda expression to search for customer that matches the id
		return customers.stream().filter(t -> t.getId().equals(id)).findFirst().get();
	}
	
	public void addCustomer(Customer customer) {
		customers.add(customer);
	}
	
	public void updateCustomer(String id, Customer customer) {
		for (int i=0; i < customers.size(); i++) {
			Customer c = customers.get(i);
			if (c.getId().equals(id)) {
				customers.set(i, customer);
				return;
			}
		}
	}
	
	public void deleteCustomer(String id) {
		customers.removeIf(t -> t.getId().equals(id));
	}

}
