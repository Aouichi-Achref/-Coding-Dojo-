package com.achref.dojoninja.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.achref.dojoninja.entity.Dojo;
import com.achref.dojoninja.entity.Ninja;
import com.achref.dojoninja.service.DojoService;
import com.achref.dojoninja.service.NinjaSevice;

import jakarta.validation.Valid;

@Controller
public class NinjaController {
	
	@Autowired
	public NinjaSevice ninjaServ;
	@Autowired
	public DojoService dojoServ;
	
	@GetMapping("ninja/new")
	public String newNinja(@ModelAttribute("ninja") Ninja ninja,Model model){
		List<Dojo> allDojo = dojoServ.allDojo();
		model.addAttribute("allDojo",allDojo);		
		return "NewNinja.jsp";
	}
	
	@PostMapping("create/ninja")
	public String createNinja(@Valid @ModelAttribute("ninja")Ninja ninja,BindingResult result) {
		if(result.hasErrors()) {
			//return the new page
			return"NewNinja.jsp";
			//if there are no errors
		}else {
			Ninja newNinja = ninjaServ.createNinja(ninja);
			//redirect to the show page of the car
			return "redirect:/ninja/new";
		}
	}
}
