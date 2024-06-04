<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<div class="container">
<div class="d-flex justify-content-between mt-3">
<div>
<h1>Add a Book to your Shelf!!!!</h1>
</div>
<div>
<a href="/logout" class="btn btn-danger">Logout</a>
<a href="/books" class="btn btn-primary">Back to the shelves</a>
</div>
</div>
<div class="container mt-3">
	<h1>Add a Book to you Shelf!</h1>
	<form:form action="/create/book" method="post" modelAttribute="book">
	
		<form:label path="Title" class="form-label">Title</form:label>
		<form:input path="Title" class="form-control"/>
		<form:errors class="text-danger" path="Title"/>
		<br>
		<form:label path="author" class="form-label">Author</form:label>
		<form:input path="author" class="form-control"/>
		<form:errors class="text-danger" path="author"/>
		<br>
		<form:label path="thoughts" class="form-label">My Thoughts</form:label>
		<form:textarea path="thoughts" class="form-control"></form:textarea>		
		<form:errors class="text-danger" path="thoughts"/>
		<br>
		<div class="d-flex justify-content-between">
		<a class="btn btn-danger" href="/books">Cancel</a>
		<input type="submit" value="Create" class="btn btn-primary">
		</div>		
	</form:form>

</div>
</div>
</body>
</html>
