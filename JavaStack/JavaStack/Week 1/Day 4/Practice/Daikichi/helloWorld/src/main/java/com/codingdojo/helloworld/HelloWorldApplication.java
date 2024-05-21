package com.codingdojo.helloworld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldApplication.class, args);
	}
	
        @RequestMapping("/daikichi")
    // 3. Method that maps to the request route above
    public String index1() { // 3
        return "<h1>Welcome to the dojo life!<h1>";
        }
        @RequestMapping("/daikichi/today")
    // 3. Method that maps to the request route above
    public String index2() { // 3
        return "<h1>Today you will find luck in all your endeavors<h1>";
        }
        @RequestMapping("/daikichi/tomorrow")
    // 3. Method that maps to the request route above
    public String index3() { // 3
        return "<h1>omorrow, an opportunity will arise, so be sure to be open to new ideas!<h1>";
        }
}
