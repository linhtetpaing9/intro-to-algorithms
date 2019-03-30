<?php

$numbers = range(1, 300);

$randomNumber = rand(1, 400);

function search($query, $numbers){
	$result = in_array($query, $numbers);
	determineResult($result);
}

function determineResult($result){
	echo $result ? 'Search Result Found':'Search Result Not Found';
}

search($randomNumber, $numbers);

?>
