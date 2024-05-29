package com.achref.burger.reposiotry;

import java.util.List;

import org.springframework.data.repository.CrudRepository;//lil CrudRepository<Burger, Long>
import org.springframework.stereotype.Repository;//@Repository bech t9oulou ray haka ou haka
//bech tjib il Burger entity
import com.achref.burger.model.Burger;

@Repository
public interface BurgerRepo extends CrudRepository<Burger, Long> {
	List<Burger> findAll();
}
