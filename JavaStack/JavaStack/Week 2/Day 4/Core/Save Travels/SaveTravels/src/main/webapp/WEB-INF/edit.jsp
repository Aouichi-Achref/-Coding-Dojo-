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
<div class="grid gap-0 row-gap-3" ><h1>Edit Expenses</h1> <h1><a href="/expenses">GO Back</a></h1></div>
<form:form action="/edit/${expenses.id}" methode="post" modelAttribute="expenses">
<input type="hidden" name="_method" value="put">

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
	<input type="submit" value="edit" class="btn btn-primary">
	</div>
</form:form>
</div>
</body>
</html>