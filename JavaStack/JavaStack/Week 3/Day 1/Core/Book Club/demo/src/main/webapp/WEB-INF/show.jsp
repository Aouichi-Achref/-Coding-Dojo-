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
    <title>See All Books</title>
</head>
<body>
<div class="container">
<div class="d-flex justify-content-between mt-3">
<div>
<h1>${book.title}</h1>
</div>
<div>
<a href="/logout" class="btn btn-danger">Logout</a>
<a href="/books" class="btn btn-primary">Back to the shelves</a>
</div>
</div>
<div class=" mt-3">
<div >
<c:if test="${userID != book.poster.id}">
<h1>${loggedUser.userName} read ${book.title} by ${book.author}</h1>
<h1 class="text-decoration-underline">here Are ${book.poster.userName} Thoughts</h1>
  </c:if>
 <c:if test="${userID == book.poster.id}">
<h1>you read ${book.title} by ${book.author}</h1>
<h1 class="text-decoration-underline">here Are your Thoughts</h1>
 </c:if>
<hr>
<h2>${book.thoughts}</h2>
<hr>
<c:if test="${userID == book.poster.id}">
   <a href="/books/${book.id }/edit" class="btn btn-info"> Edit</a>
<form action="/books/${book.id}/delete" method="post">
<button type="submit"class ="btn btn-danger"
	type="hidden" name="_method" value="delete">Delete</button>
</form>
  </c:if>
</body>
</html>
