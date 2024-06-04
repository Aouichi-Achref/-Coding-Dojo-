package com.achref.BookClub.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.achref.BookClub.Entity.Book;
import com.achref.BookClub.Entity.User;
import com.achref.BookClub.Service.BookServ;
import com.achref.BookClub.Service.UserServ;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	@Autowired
	private BookServ bookServ;
	@Autowired
	private UserServ userServ;
	
	@GetMapping("/books")
	public String allBooks(Model model,HttpSession sess) {
		Long userId = (Long) sess.getAttribute("user_id");
		if(userId == null) {
			//redirect to the login page
			return "redirect:/";
		}
		User loggedUser = userServ.findUserById(userId);
		model.addAttribute("loggedUser", loggedUser);
		List<Book> books = bookServ.allBooks();
		model.addAttribute("books",books);
		return "allBooks.jsp";
	}
	
	@GetMapping("/new/Book")
	public String newbook(@ModelAttribute("book") Book book, HttpSession s) {
		//get the user id from the session
		Long userId = (Long) s.getAttribute("user_id");
		//if the user is not logged in
		if(userId == null) {
			//redirect to the login page
			return "redirect:/";
		}
		return"newBook.jsp";
	}
	//Postmapping create Book
	@PostMapping("/create/book")
	public String createBook(@Valid @ModelAttribute("book") Book book ,BindingResult result, HttpSession s) {
		//get the user id from the session
		Long userId = (Long) s.getAttribute("user_id");
		//if there are errors in the form
		if(result.hasErrors()) {
			//return the new page
			return"new.jsp";
			//if there are no errors
		}else {
			//find the user by the id
			User user = userServ.findUserById(userId);
			//set the user as the owner of the Book
			book.setPoster(user);
			//create the Book
			Book newBook = bookServ.createBook(book);
			//redirect to the show page of the Book
			return "redirect:/books";
		}
	}
//	getMapping show one 
	@GetMapping("/books/{id}")
	public String showCar(@PathVariable("id")Long id, Model model, HttpSession s) {
		//get the user id from the session
		Long userId = (Long) s.getAttribute("user_id");
		if(userId == null) {
			//redirect to the login page
			return "redirect:/";
		}
		model.addAttribute("userID", userId);
		Book book = bookServ.findBookById(id);
		model.addAttribute("book", book);
		return "show.jsp";
	}
//	@deleteMapping
	@DeleteMapping("/books/{id}/delete")
	public String delete(@PathVariable("id") Long id, Model model,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
	@GetMapping("/books/{id}/edit")
	public String edit(@PathVariable("id") Long id ,Model model,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book",selectedBook);
		return "edit.jsp";
	}
	

	@PutMapping("/edit/{id}")
	public String edittt(@Valid @ModelAttribute Book book,BindingResult result,@PathVariable("id") Long id, Model model,HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		if (result.hasErrors())return"edit.jsp";
		User user=userServ.findUserById(userId);
		book.setPoster(user);
		bookServ.updateBook(book);
		return "redirect:/books";
	}

}
