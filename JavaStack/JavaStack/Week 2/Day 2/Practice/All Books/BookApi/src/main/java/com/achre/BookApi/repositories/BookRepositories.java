package com.achre.BookApi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.achre.BookApi.models.Book;

@Repository
public interface BookRepositories extends CrudRepository<Book, Long>  {
	
    // this method retrieves all the books from the database
    List<Book> findAll();
    
    
    
    

    
}
