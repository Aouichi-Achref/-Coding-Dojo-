package com.achref.BookClub.Entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="books")
public class Book {
//	STORE THE USER ID 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
//	STORE THE BOOK TITLE 
	@NotEmpty(message = "Title must not be blank!")
	@Size(min = 3, max = 50, message = "Title must be between 3 and 50 characters")
	private String Title;
//	STORE THE AuTHOR 
	@NotEmpty(message = "AUTHOR must not be blank !")
	@Size(min = 3, max = 30, message = "AUTHOR must be between 3 and 30 characters")
	private String author;
//	STORE THE THoughts
	@NotEmpty(message = "THoughts must not be blank!")
	@Size(min = 3, max = 100, message = "Username must be between 3 and 100 characters")
	private String thoughts;
//	stor both created and updated AT 
	@DateTimeFormat(pattern="yyyy-mm-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-mm-dd")
	private Date updatedAT;
	
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAT = new Date();
    }
    
	//relationship
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User poster; //! owner is the name of the field in the Car class that will hold the User object. it must be like the name of mapped by in the User class

	public Book() {
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getThoughts() {
		return thoughts;
	}
	public void setThoughts(String thoughts) {
		this.thoughts = thoughts;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAT() {
		return updatedAT;
	}
	public void setUpdatedAT(Date updatedAT) {
		this.updatedAT = updatedAT;
	}
	public User getPoster() {
		return poster;
	}
	public void setPoster(User poster) {
		this.poster = poster;
	}
    
}
