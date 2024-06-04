package com.achref.BookClub.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achref.BookClub.Entity.Book;
import com.achref.BookClub.repository.BookRepo;

@Service
public class BookServ {
	@Autowired
	private BookRepo bookRepo;
	
	//create
	public Book createBook(Book book) {
		System.out.println(book);
		return bookRepo.save(book);
	}
	
	//READ ONE 
	public Book findBookById(Long id) {
		Optional<Book> optBook = bookRepo.findById(id);
		if(optBook.isPresent()) {
			return optBook.get();
		}
		return null;
	}
	
	//read all 
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}

	//edit 
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}

	//delete
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
	

}
