<?php 
	require 'db.php';

	$data = $_POST;

	function captcha_show(){
		$questions = array(
			1 => '8 + 12',
			2 => '11 + 14',
			3 => '2 + 3',
			4 => '15 + 14',
			5 => '45 - 10',
			6 => '33 - 3'
		);
		$num = mt_rand( 1, count($questions) );
		$_SESSION['captcha'] = $num;
		echo $questions[$num];
	}

	if ( isset($data['do_signup']) )
	{
		$errors = array();
		if ( trim($data['login']) == '' )
		{
			$errors[] = 'Enter login';
		}

		if ( trim($data['email']) == '' )
		{
			$errors[] = 'Enter Email';
		}

		if ( $data['password'] == '' )
		{
			$errors[] = 'Enter password';
		}

		if ( $data['password_2'] != $data['password'] )
		{
			$errors[] = 'Repeat password entered is not true!';
		}
		if ( R::count('users', "login = ?", array($data['login'])) > 0)
		{
			$errors[] = 'User with this login already exists!';
		}
		if ( R::count('users', "email = ?", array($data['email'])) > 0)
		{
			$errors[] = 'A user with this Email already exists!';
		}

		$answers = array(
			1 => '20',
			2 => '25',
			3 => '5',
			4 => '29',
			5 => '35',
			6 => '30'
		);
		if ( $_SESSION['captcha'] != array_search( mb_strtolower($_POST['captcha']), $answers ) )
		{
			$errors[] = 'The answer to the question is not correct!';
		}


		if ( empty($errors) )
		{
			$user = R::dispense('users');
			$user->login = $data['login'];
			$user->email = $data['email'];
			$user->password = password_hash($data['password'], PASSWORD_DEFAULT); 
			R::store($user);
			echo '<div class = "successful-message" style = "color: green">You have successfully registered! </br><a href="/login.php">Authorization </a></div> ';
		}else
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
	<form class="form form-sinup" action="/signup.php" method="POST">
		<h1>Registration</h1>
		<strong>You Login</strong>
		<input type="text" name="login" value="<?php echo @$data['login']; ?>"><br/>

		<strong>You Email</strong>
		<input type="email" name="email" value="<?php echo @$data['email']; ?>"><br/>

		<strong>You password</strong>
		<input type="password" name="password" value="<?php echo @$data['password']; ?>"><br/>

		<strong>Confirm password</strong>
		<input type="password" name="password_2" value="<?php echo @$data['password_2']; ?>"><br/>

		<strong><?php captcha_show(); ?></strong>
		<input type="text" name="captcha" ><br/>

		<button type="submit" name="do_signup">Registered</button>
		<p>Registered?</p>
		<a href="/login.php">Authorization </a>

	</form>
</body>
</html>	