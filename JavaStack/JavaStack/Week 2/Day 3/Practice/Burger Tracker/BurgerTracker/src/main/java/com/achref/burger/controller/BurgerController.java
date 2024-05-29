package com.achref.burger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.achref.burger.model.Burger;
import com.achref.burger.service.BurgeSer;

import jakarta.validation.Valid;

@Controller
public class BurgerController {

	@Autowired
	public BurgeSer burgerSer;
	
	@GetMapping("/burger/new")
	public String newBurger(@ModelAttribute("burger") Burger burger,Model model) {
		List<Burger> allBurger = burgerSer.getAllBurger();
		model.addAttribute("allBurger",allBurger);
		return "new.jsp";
	}
	
	@PostMapping("/createBurger")
	public String createBurger(@Valid @ModelAttribute("burger") Burger burger, BindingResult result) {
	if(result.hasErrors()) {
		return "new.jsp";
	}else {
		Burger newburger= burgerSer.createBurger(burger);
		return "redirect:/burger/new";
	}
	}
}
