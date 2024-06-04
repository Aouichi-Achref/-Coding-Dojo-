package com.achref.BookClub.Entity;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {
//		evry user member variables
//		STORE THE USER ID 
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
//		STORE THE USER NAME 
		@NotEmpty(message = "Username is required!")
		@Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters")
		private String userName;
//		STORE THE EMAIL
		@NotEmpty(message = "Email is required!")
		@Email(message = "Please enter a valid email!")
		private String email;
//		Store the password
		@NotEmpty(message = "Password is required!")
		@Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters")
		private String password;
//		fake variables to confirm password with the @Transient
		@Transient
		@NotEmpty(message = "Confirm Password is required!")
		@Size(min = 8, max = 128, message = "Confirm Password must be between 8 and 128 characters")
		private String confirm;
//		stor both created and updated AT 
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
	    @OneToMany(mappedBy="poster", fetch = FetchType.LAZY)
	    private List<Book> poster;
	    
	    public User() {}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getConfirm() {
			return confirm;
		}
		public void setConfirm(String confirm) {
			this.confirm = confirm;
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
		public List<Book> getPoster() {
			return poster;
		}
		public void setPoster(List<Book> poster) {
			this.poster = poster;
		}
	    
}
