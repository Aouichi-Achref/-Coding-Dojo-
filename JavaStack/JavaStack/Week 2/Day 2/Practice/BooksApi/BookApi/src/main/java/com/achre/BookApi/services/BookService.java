package com.achre.BookApi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.achre.BookApi.models.Book;
import com.achre.BookApi.repositories.BookRepositories;

@Service
public class BookService {
	
	@Autowired
	BookRepositories bookRepo;
	
	// creates a book
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
    // returns all the books
	public List<Book> getAllBook(){
		return bookRepo.findAll();
	}
    // one book by id
	public Book findOne(Long id) {
		Optional<Book> book = bookRepo.findById(id);
		if(book.isEmpty()) {
			return null;
		}
		return book.get();
	}
	// Update Book 
	public Book updateBook(Book newBook) {
		return bookRepo.save(newBook);
	}
	// Delete book
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
	
	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		  if(optionalBook.isPresent()) {
			  Book Book=optionalBook.get();
			  Book.setTitle(title);
			  Book.setDescription(desc);
			  Book.getLanguage();
			  Book.getNumberOfPages();
				return bookRepo.save(Book);
	        } else {
	            return null;
	        }
	}
	
}
