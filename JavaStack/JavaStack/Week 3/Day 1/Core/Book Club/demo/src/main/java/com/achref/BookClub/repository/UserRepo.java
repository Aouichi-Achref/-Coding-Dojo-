package com.achref.BookClub.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.achref.BookClub.Entity.User;


@Repository
public interface UserRepo extends CrudRepository<User, Long>{
	 Optional<User> findByEmail(String email);
}
