package com.achref.save.travels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.achref.save.travels.models.Expenses;

@Repository
public interface ExpensesRepository extends CrudRepository<Expenses, Long>{
	List<Expenses> findAll();
}
