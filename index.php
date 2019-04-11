<?php 
	require 'db.php';
?>

 <?php if ( isset ($_SESSION['logged_user']) ) : ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>to do list</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/main.min.css">
	<link rel="stylesheet" type="text/css" href="css/normalaze.min.css">
</head>
<body> 	
	<main>
		<header class="header">
			<div class="header-info">
				<p>Authorized!</p>
				<p>Hello, <?php echo $_SESSION['logged_user']->login; ?>!</p>
				<a href="logout.php">Logout</a>	
			</div>
		</header>
		<div class="container">
			<h1>simple todo list</h1>
			<button class="addTodoList" id="addTodoList">Add TODO List</button>
		</div>
	</main>
	<script src="js/script.js"></script>
</body>
</html>	
<?php else : ?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>to do list</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/main.min.css">
	<link rel="stylesheet" type="text/css" href="css/normalaze.min.css">
</head>
<body> 	
	<div class="modal">
		<h1>You are not registered</h1>
		<div class="modal-btn">
			<a href="/login.php">Authorization </a>
			<a href="/signup.php">Registration</a>
		</div>
	</div>
</body>
</html>	
<?php endif; ?> 

