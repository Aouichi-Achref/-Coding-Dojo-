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
<div class=" mt-3">
<div>
<h1>Wellcom ${loggedUser.userName }</h1>
<a href="/logout" class="btn btn-danger">Logout</a>
</div>
<div>
<h1>Books from everyone's Shelves</h1>
<a href="/new/Book" class="btn btn-info">Add to my shelf!</a>
</div>
</div>
<table class="table">
<thead><tr>
<th>ID</th>
<th>Title</th>
<th>Author Name</th>
<th>Posted By</th>
</tr></thead>
<tbody>

<c:forEach items="${books }" var="book">
<tr>
<td>${book.id}</td>
<td> <a href="/books/${book.id}">${book.title }</a>  </td>
<td>${book.author }</td>
<td>${book.poster.userName}</td>
</tr>
</c:forEach>
</tbody>
</table>
</div>
</body>
</html>
