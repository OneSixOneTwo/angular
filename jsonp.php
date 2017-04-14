<?php
	if($_GET["input"]=="xie"){
		$data = "对啊，我是愚蠢的老谢";
		echo $_GET["callback"]."({name: '".$data."'})";
	}else{
		$data = "对啊，我是聪明的老姚";
		echo $_GET["callback"]."({name: '".$data."'})";
	}
?>