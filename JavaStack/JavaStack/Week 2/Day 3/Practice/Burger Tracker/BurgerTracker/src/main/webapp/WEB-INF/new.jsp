<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<div class="container mt-3">
<div class="d-flex justify-content-between mt-3">
<h1>All Burger 🍔🍔</h1>
</div>
<table class="table">
<thead><tr>
<th>Burger Name</th>
<th>Restaurant Name</th>
<th>Rating</th>
</tr></thead>
<tbody>

<c:forEach items="${allBurger }" var="burger">
<tr>
<td> ${burger.title} </td>
<td>${burger.restaurantName }</td>
<td>${burger.rating }</td>
</tr>
</c:forEach>
</tbody>
</table>

</div>
<div class="container mt-3">

<h1>Create New <span class="text-danger">Burger</span></h1>
<form:form action="/createBurger" methode="post" modelAttribute="burger">
	
	
	<form:label path="title" class="form-label">title</form:label>
	<form:input path="title" class="form-control"></form:input>
	<form:errors path="title" class="text-warning"></form:errors>
	<br>
	<form:label path="restaurantName" class="form-label">restaurantName</form:label>
	<form:input path="restaurantName" class="form-control"></form:input>
	<form:errors path="restaurantName" class="text-warning"></form:errors>
	<br>
	<form:label path="rating" class="form-label">rating</form:label>
	<form:input path="rating" type="number" step="0.001" class="form-control"></form:input>
	<form:errors path="rating" class="text-warning"></form:errors>
	<br>
	<form:label path="notes" class="form-label">notes</form:label>
	<form:textarea path="notes"  class="form-control"></form:textarea>
	<form:errors path="notes" class="text-warning"></form:errors>
	<br>
	<div>
	<a class="btn btn-danger" href="/cars">cancel</a>
	<input type="submit" value="Create" class="btn btn-sucess">
	</div>
	
</form:form>
</div>
</body>
</html>