<?php
session_start();
if (!isset( $_POST['email'] ))
{
	 header("location:index.html");
}
else{
$link = mysqli_connect("localhost", "spidersd_client","client","spidersd_feedback");
  if(!$link)
  die('COULD NOT USE:'. mysqli_error($link));			 
$name = mysqli_real_escape_string($link, $_POST['name']);
$mail = mysqli_real_escape_string($link, $_POST['email']);
$comments = mysqli_real_escape_string($link, $_POST['comments']);
$result=mysqli_query($link,"INSERT INTO comments (name,mail,comments) VALUES ('$name','$mail','$comments')");
if($result){
	echo"<script type='text/javascript'>
	window.setTimeout(function() { alert( 'Thank You..,Your feedback has been submitted ..!' );
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
}
