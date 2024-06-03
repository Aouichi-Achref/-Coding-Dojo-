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
<h1>${oneDojo.name}<span class="text-danger"> NINJAS</span> </h1>
<table class="table">
<thead><tr>
<th><span class="text-danger">First</span> Name</th>
<th><span class="text-danger">Last</span>Name</th>
<th><span class="text-danger">A</span>ge</th>
</tr></thead>
<tbody>

<c:forEach items="${allNinja }" var="ninja">
<tr>
<td> ${ninja.firstName} </td>
<td>${ninja.lastName}</td>
<td>${ninja.age}</td>
</tr>
</c:forEach>
</tbody>
</table>
</div>
</body>
</html>