<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
</head>
<body>
<h1 class="bg-red-100">Customer Name : ${name}</h1>
<h4>Item name : ${itemName}</h4>
<h4>Price: ${price}</h4>
<h4>Description: ${description}</h4>
<h4>Vendor: ${vendor}</h4>
 
</body>
</html>