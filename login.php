<?php 
	require 'db.php';

	$data = $_POST;
	if ( isset($data['do_login']) )
	{
		$user = R::findOne('users', 'login = ?', array($data['login']));
		if ( $user )
		{
			if ( password_verify($data['password'], $user->password) )
			{
				$_SESSION['logged_user'] = $user;
				echo '<div class="successful-message" style = "color: green">You are logged in!<br/> Can go to <a href="/">To Do List</a> page.</div>';
			}else
			{
				$errors[] = 'Invalid password entered!';
			}

		}else
		{
			$errors[] = 'User with this login is not found!';
		}
		
		if ( ! empty($errors) )
		{
			echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div>';
		}

	}

?>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>to do list</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/main.min.css">
	<link rel="stylesheet" type="text/css" href="css/normalaze.min.css">
</head>
<body>
<form class="form-login form" action="login.php" method="POST">
	<h1>From Login</h1>
	<strong> Your Login</strong>
	<input type="text" name="login" value="<?php echo @$data['login']; ?>"><br/>

	<strong>Your Password</strong>
	<input type="password" name="password" value="<?php echo @$data['password']; ?>"><br/>

	<button type="submit" name="do_login">Sing In</button>
	<p>If you are not registered yet</p>
	<a href="/signup.php">Registration</a>
</form>
</body>
</html>