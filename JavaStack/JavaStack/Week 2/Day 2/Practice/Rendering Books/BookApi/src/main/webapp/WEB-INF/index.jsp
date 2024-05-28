<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1 class="text-center text-lg-mid text-danger">All Books</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Language</th>
            <th>Number of Pages</th>
        </tr>
    </thead>
    <tbody>
    <c:forEach items="${books}" var="book">
    <tr>
	<td><c:out value="${book.id}"></c:out></td>
	<td><a href ="/book/${book.id }">
	<c:out value="${book.title}"/>
	</a></td>
	<td><c:out value="${book.language}"></c:out></td>
	<td><c:out value="${book.numberOfPages}"></c:out></td>
	</tr>
</c:forEach>
    </tbody>
</table>
</body>
</html>