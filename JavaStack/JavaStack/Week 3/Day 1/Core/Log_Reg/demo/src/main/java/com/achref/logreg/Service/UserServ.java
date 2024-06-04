package com.achref.logreg.Service;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.achref.logreg.Entity.LoginUser;
import com.achref.logreg.Entity.User;
import com.achref.logreg.Repository.UserRepo;

@Service
public class UserServ {

	@Autowired
	private UserRepo userRepo;
	
    //register user and hash their password
    public User register(User newUser, BindingResult result){
        //check if email is already in the database
        Optional<User> opUser = userRepo.findUserByEmail(newUser.getEmail());
        //if email is already in the database
        if(opUser.isPresent()){
            //rejectValue is used to send an error message to the view
            result.rejectValue("email", "registerErrors", "This email is already in use");
        }
        //check if password and confirm password match
        if(!newUser.getPassword().equals(newUser.getConfirm())){
            //rejectValue is used to send an error message to the view
            result.rejectValue("confirmPassword", "registerErrors", "Passwords do not match");
        }
        //if there are errors
        if(result.hasErrors()){
        return null;
        }else{
            //hash the password
            newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
            //save the user
            return userRepo.save(newUser);
        }
    }
    //login user
    public User login(LoginUser newLogin, BindingResult result){
        //check if email is in the database
        Optional<User> opUser = userRepo.findUserByEmail(newLogin.getEmail());
        //if user is not present in the database
        if(!opUser.isPresent()){
            result.rejectValue("email", "loginErrors", "Invalid credential!");

        }else{
            User user = opUser.get();
            //check if password matches
            if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())){
                //if password does not match
                result.rejectValue("password", "loginErrors", "Invalid credential!");
            }
            //if there are errors
            if(result.hasErrors()){
                return null;
            }else{
                //if there are no errors
                return user;
            }
        }
        return null;
    }
    // find a user by ID from DB
    public User findUserById(Long id) {
    	Optional<User> maybeUser = userRepo.findById(id);
    	if(maybeUser.isPresent()) {
    		return maybeUser.get();
    	}else {
    		return null;
    	}
    }
}
