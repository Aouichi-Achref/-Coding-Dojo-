package com.achref.dojoninja.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.achref.dojoninja.entity.Dojo;
import com.achref.dojoninja.entity.Ninja;
import com.achref.dojoninja.service.DojoService;
import com.achref.dojoninja.service.NinjaSevice;

import jakarta.validation.Valid;

@Controller
public class DojoController {

	@Autowired
	public DojoService dojoServ;
	@Autowired
	public NinjaSevice ninjaServ;
	
	@GetMapping("dojo/new")
	public String newDojo(@ModelAttribute("dojo")Dojo dojo) {
		return "NewDojo.jsp";
	}
	
	@PostMapping("create/Dojo")
	public String createNinja(@Valid @ModelAttribute("dojo")Dojo dojo,BindingResult result) {
		if(result.hasErrors()) {
			//return the new page
			return"NewDojo.jsp";
			//if there are no errors
		}else {
			Dojo newDojo = dojoServ.createDojo(dojo);
			//redirect to the show page of the car
			return "redirect:/dojo/new";
		}
	}
	
	@GetMapping("Dojo/{id}")
	public String oneDojo(@PathVariable("id") Long id,Model model) {
		Dojo oneDojo = dojoServ.findDojoById(id);
		model.addAttribute("oneDojo",oneDojo );
		List<Ninja> allNinja=oneDojo.getNinjas();
		model.addAttribute("allNinja",allNinja);
		return "oneDojo.jsp";
	}	
	
	
}
