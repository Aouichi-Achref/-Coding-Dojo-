package com.achref.save.travels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achref.save.travels.models.Expenses;
import com.achref.save.travels.repositories.ExpensesRepository;

@Service
public class ExpensesService {
	
	@Autowired
	ExpensesRepository expensesRepo;
//	create
	public Expenses createExpenses(Expenses expenses) {
		return expensesRepo.save(expenses);
	}
//  find all 
	public List<Expenses> getAllExpenses(){
		return expensesRepo.findAll();
	}
//	find one by id
	public Expenses findOne(Long id ) {
		Optional<Expenses> burger = expensesRepo.findById(id);
		if(burger.isEmpty()) {
			return null;
		}
		return burger.get();
	}
	
//	update
	public Expenses updateExpenses(Expenses newExpenses) {
	return expensesRepo.save(newExpenses);
	}
//  delete
	public void deleteExpenses(Long id) {
		expensesRepo.deleteById(id);
	}
}
