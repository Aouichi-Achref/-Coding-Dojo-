package com.achref.BookClub.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.achref.BookClub.Entity.LoginUser;
import com.achref.BookClub.Entity.User;
import com.achref.BookClub.Service.UserServ;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {
	@Autowired
	private UserServ userServ;
	  
	@GetMapping("/")
    public String index(Model model){
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
      	return "Index.jsp";
	}
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, HttpSession session, Model model){
        // pass the user object to the register method in the service
        userServ.register(newUser, result);
        // if there are errors
        if(result.hasErrors()){
            //  pass the newLogin object to the index page for login
            model.addAttribute("newLogin", new LoginUser());
            // return the index page
            return "Index.jsp";
        }else{
            // set the user id in session
            session.setAttribute("user_id", newUser.getId());
            // redirect to the cars route
            return "redirect:/books";
        }
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, HttpSession session, Model model){
        // pass the newLogin object to the login method in the service
        User user = userServ.login(newLogin, result);
        // if there are errors
        if(result.hasErrors()){
            // pass the newUser object to the index page for registration
            model.addAttribute("newUser", new User());
            // return the index page
            return "Index.jsp";
        }else{
            // set the user id in session
            session.setAttribute("user_id", user.getId());
            // redirect to the cars route
            return "redirect:/books";
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session){
        // invalidate session
        session.invalidate();
        // redirect to the index route
        return "redirect:/";
    }
}
