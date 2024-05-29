<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->

<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container mt-3">
<h1>update Book</h1>
<form:form action="/edit/${burger.id}" method="post" modelAttribute="burger">
<input type="hidden" name="_method" value="put">
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
	<a class="btn btn-danger" href="/burger/new">cancel</a>
	<input type="submit" value="edit" class="btn btn-sucess">
	</div>
</form:form> 
</div>
</body>
</html>