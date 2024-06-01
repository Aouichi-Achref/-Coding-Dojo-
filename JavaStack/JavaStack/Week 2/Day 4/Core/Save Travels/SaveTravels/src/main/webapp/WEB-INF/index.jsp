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
	<div class="d-flex justify-content-between mt-3">
<h1>save <span class="text-primary">Travels</span></h1>
</div>
<table class="table">
<thead><tr>
<th><span class="text-danger">Ex</span>pense</th>
<th><span class="text-danger">Ve</span>ndor</th>
<th><span class="text-danger">Am</span>ount</th>
<th><span class="text-danger">Ac</span>tion</th>
</tr></thead>
<tbody>

<c:forEach items="${allExpenses }" var="expenses">
<tr>
<td><a href="expenses/${expenses.id }"> ${expenses.name}</a> </td>
<td>${expenses.vendor }</td>
<td>${expenses.amount }</td>
<td><a href="/expenses/${expenses.id}/edit"><span class="text-danger">E</span>dit</a></td>
<td><form action="/expenses/${expenses.id}/delete" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form>
</td>
</tr>
</c:forEach>
</tbody>
</table>
</div>
<div class="container mt-3">
<h1>Add an<span class="text-primary">Expenses</span>:</h1>
<form:form action="/create/expenses" methode="post" modelAttribute="expenses">
	
	
	<form:label path="name" class="form-label"><span class="text-primary">Expenses</span> name</form:label>
	<form:input path="name" class="form-control"></form:input>
	<form:errors path="name" class="text-danger"></form:errors>
	<br>
	<form:label path="vendor" class="form-label">vendor</form:label>
	<form:input path="vendor" class="form-control"></form:input>
	<form:errors path="vendor" class="text-danger"></form:errors>
	<br>
	<form:label path="amount" class="form-label">amount</form:label>
	<form:input path="amount" type="number" class="form-control"></form:input>
	<form:errors path="amount" class="text-danger"></form:errors>
	<br>
	<form:label path="description" class="form-label">description</form:label>
	<form:textarea path="description"  class="form-control"></form:textarea>
	<form:errors path="description" class="text-danger"></form:errors>
	<br>
	<div>
	<input type="submit" value="Create" class="btn btn-primary">
	</div>
	
</form:form>
</div>
</body>
</html>