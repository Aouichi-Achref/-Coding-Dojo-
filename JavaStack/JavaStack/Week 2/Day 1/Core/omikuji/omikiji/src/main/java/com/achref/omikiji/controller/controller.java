package com.achref.omikiji.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
@Controller
public class controller {
	
	@GetMapping("/omikuji")
	public String form() {
		return "form.jsp";
	}
	
	@PostMapping("/submit")
	public String submit(@RequestParam("years") String year,@RequestParam("city") String city,@RequestParam("person") String person,
			@RequestParam("profHobb") String profHobb,@RequestParam("type") String type,@RequestParam("description") String description,
			HttpSession session) {
		
		session.setAttribute("year", year);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("profHobb",profHobb);
		session.setAttribute("type", type);
		session.setAttribute("description", description);
		
		return "redirect:/show";
			
	}
	
	@GetMapping("/show")
	public String show() {
		return "show.jsp";
	}

}
