<?php 
require 'libs/rb.php';
R::setup( ' mysql://b9635a4f0f9b43:d397c387@us-cdbr-iron-east-02.cleardb.net/heroku_2a8b0879fe86740?reconnect=true; dbname=	 heroku_2a8b0879fe86740','b9635a4f0f9b43', 'd397c387'); 

if ( !R::testconnection() )
{
		exit ('No database connection');
}

session_start();