<?php 
require 'libs/rb.php';
R::setup( 'mysql:host=localhost;dbname=users','root', '' ); 

if ( !R::testconnection() )
{
		exit ('No database connection');
}

session_start();