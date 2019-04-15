<?php 
require 'libs/rb.php';
R::setup( 'mysql:127.0.0.1;dbname=users','root', '' ); 
 

if ( !R::testconnection() )
{
		exit ('No database connection');
}

session_start();