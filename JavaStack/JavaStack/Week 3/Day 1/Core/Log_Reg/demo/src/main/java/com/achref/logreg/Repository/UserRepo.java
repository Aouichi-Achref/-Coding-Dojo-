package com.achref.logreg.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.achref.logreg.Entity.User;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
	Optional<User> findUserByEmail(String email);
}
