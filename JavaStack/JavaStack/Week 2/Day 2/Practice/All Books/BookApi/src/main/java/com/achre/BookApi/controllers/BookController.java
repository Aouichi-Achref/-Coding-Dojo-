package com.achre.BookApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.achre.BookApi.models.Book;
import com.achre.BookApi.services.BookService;

import jakarta.validation.Valid;


@Controller
public class BookController {

	@Autowired
	BookService bookSer;
	// all books
    @GetMapping("/books")
    public String showAll(Model model ) {
    List<Book> books = bookSer.getAllBook() ;
    model.addAttribute("books", books);
    return "index.jsp";
    }
    // one book
    @GetMapping("/book/{id}")
    public String ShowOne(@PathVariable("id") long id,Model model) {
        Book OneBook = bookSer.findOne(id);
        model.addAttribute("OneBook",OneBook);
        return "Show.jsp";
    }

    // create book
        @GetMapping("/book/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "new.jsp";
    }
    @PostMapping("/new/book")
    public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            bookSer.createBook(book);
            return "redirect:/books";
        }
    }
}
