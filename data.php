<?php
if(isset($_GET['sent'])){
	if($_GET['sent'] == 'a' ){
		$toEcho[0]['id'] = 40;
		$toEcho[0]['name']="Astapor";
		$toEcho[1]['id'] = 80;
		$toEcho[1]['name']="Alleypre";	
		echo json_encode($toEcho);
		exit();
	} else if(trim($_GET['sent'])==""){
		exit();
	}
	$toEcho[0]['id'] = 10;
	$toEcho[0]['name']="Nepal";
	$toEcho[1]['id'] = 20;
	$toEcho[1]['name']="Nauru";
	$toEcho[2]['id'] = 30;
	$toEcho[2]['name']="Nambia";
	echo json_encode($toEcho);
}