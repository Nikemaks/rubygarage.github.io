<?php 
require 'libs/rb.php';
R::setup( 'mysql://b7910360988363:cf43c19c@us-cdbr-iron-east-02.cleardb.net/heroku_81bf97cd4fb58e9?reconnect=true; dbname=	heroku_81bf97cd4fb58e9','b7910360988363', 'cf43c19c'); 

if ( !R::testconnection() )
{
		exit ('No database connection');
}

session_start();