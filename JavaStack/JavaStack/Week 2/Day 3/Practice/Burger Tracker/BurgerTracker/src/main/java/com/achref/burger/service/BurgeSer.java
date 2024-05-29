package com.achref.burger.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achref.burger.model.Burger;
import com.achref.burger.reposiotry.BurgerRepo;

@Service
public class BurgeSer {

	@Autowired
	BurgerRepo burgerRepo;
	
//	create Burger
	public Burger createBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
//	bring me all the burgers
	public List<Burger> getAllBurger(){
		return burgerRepo.findAll();
	}
//  bring me one burger with this "***"
	public Burger findOne(Long id ) {
		Optional<Burger> burger = burgerRepo.findById(id);
		if(burger.isEmpty()) {
			return null;
		}
		return burger.get();
	}
// Delete burgeg by his id
	public void deleteBurger(Long id) {
		burgerRepo.deleteById(id);
	}
// update one buger with new burger
	public Burger updateBurger(Long id, String title, String notes , String restaurantName, Integer rating) {
		Optional<Burger> optionalBurger = burgerRepo.findById(id);
		  if(optionalBurger.isPresent()) {
			  Burger Burger=optionalBurger.get();
			  Burger.setTitle(title);
			  Burger.setNotes(notes);
			  Burger.setRestaurantName(restaurantName);
			  Burger.setRating(rating);

				return burgerRepo.save(Burger);
	        } else {
	            return null;
	        }
	}
}
