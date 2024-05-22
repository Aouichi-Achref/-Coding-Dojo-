package com.codingdojo.hellohuman.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class HumanController {
	
	
	
	@RequestMapping("/hi")
	public String helloName(@RequestParam(value = "name", required = false) String name,@RequestParam(value = "lastname", required = false) String lastname,@RequestParam(value = "times", required = false) String times) {
		if (times==null) return "hello "+name+" "+lastname;
		int a=Integer.parseInt(times);
		String res="";
		for (int i=0;i<a;i++) {
			res+=name+" "+lastname+" ";
		}
		
		return res;
	}

}