package com.codingdojo.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class HellohumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HellohumanApplication.class, args);
	}

    @RequestMapping("/")
    public String index2(@RequestParam(value="name",defaultValue = "Human", required=false) String name,
    		@RequestParam(value="lname",defaultValue = "", required=false) String lname,
    		@RequestParam(value="times",defaultValue = "0", required=false) int times) {
    	if (times != null) {
    	    int loop = 1;
    	}
    	
	 while(loop<=times & loop>=1) {
		 loop+=1;
		 return"Hello" +name+" "+lname;
	 }
	 return"Hello" +name+" "+lname;		
    }
}
