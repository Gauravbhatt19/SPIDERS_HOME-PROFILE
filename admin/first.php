<?php
session_start();
$link = mysqli_connect("localhost","admin","","spidersd_feedback");
  if(!$link)
  die('COULD NOT USE:'. mysqli_error($link));			 
$result=mysqli_query($link,"CREATE TABLE comments (name VARCHAR(40) NOT NULL ,mail VARCHAR(100) NOT NULL ,comments VARCHAR(400) NOT NULL, timstmp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)");
if($result){
	echo"<script type='text/javascript'>
	window.setTimeout(function() { alert( 'TABLE IS CREATED ' );
    window.location = 'index.html';},0);
	</script>"; 
}
else
{
	echo"<script type='text/javascript'>
	window.setTimeout(function() { alert( 'Sorry.,Please try again..!' );
    window.location = 'index.html';},0);
	</script>"; 	

}
