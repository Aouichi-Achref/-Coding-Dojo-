<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo JSP</title>
<script
	src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

</head>
<body>
 
 <h1>Here's Your Omikuji!</h1>
 <p>In ${year} you will live in ${city} with ${person } as your roommate ${profHobb} for a living.
 the next time you see a ${type},you will have good luck.
 Also,${description}
 </p>
 <a href="/omikuji">back</a>
 
	
</body>
</html>

</html>