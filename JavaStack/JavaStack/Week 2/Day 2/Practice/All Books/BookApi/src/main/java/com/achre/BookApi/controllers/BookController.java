package com.achre.BookApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.achre.BookApi.models.Book;
import com.achre.BookApi.services.BookService;


@Controller
public class BookController {

	@Autowired
	BookService bookSer;
	
    @GetMapping("/books")
    public String showAll(Model model ) {
   	List<Book> books = bookSer.getAllBook() ;
    model.addAttribute("books", books);
   	return "index.jsp";
    }
    
    @GetMapping("/book/{id}")
    public String ShowOne(@PathVariable("id") long id,Model model) {
    	Book OneBook = bookSer.findOne(id);
    	model.addAttribute("OneBook",OneBook);
    	return "Show.jsp";
    }
}
