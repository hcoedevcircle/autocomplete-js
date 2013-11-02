<?php
if(isset($_GET['sent'])){
	$toEcho[0]['id'] = 10;
	$toEcho[0]['name']="Nepal";
	$toEcho[1]['id'] = 20;
	$toEcho[1]['name']="Nauru";
	$toEcho[2]['id'] = 30;
	$toEcho[2]['name']="Nambia";
	echo json_encode($toEcho);
}