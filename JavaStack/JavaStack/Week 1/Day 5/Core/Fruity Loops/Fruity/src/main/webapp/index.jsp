<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<div class="container text-center">
    <h1 class="text-danger">Fruit Store</h1>
    <table class="table table-danger text-center" > 
    <thead>
    <tr>
    <th>Name</th>
    <th>Price</th>
    </tr>
     </thead>
     <tbody>
     <c:forEach items="${ListFruits }" var="Fruit">
				<tr class="table-light">
					<td><c:out value="${Fruit.name}"/></td>
					<td><c:out value="${Fruit.price}"/></td>
				</tr>
			</c:forEach>
     </tbody>
    </table>
    </div>
</body>
</html>