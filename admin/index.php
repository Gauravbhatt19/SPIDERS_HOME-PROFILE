<?php  session_start(); 
	
		?>
		
		<html>
     <head> <title>ADMIN | Spiders</title>
</head>
<body>
<?php echo '<h1 style="position:fixed;right:10px;top:-2px;">Hello '.'Admin'.'</h1>';
?>

          <div class="submit_paper" style="width:90%; left:5%;">
<div>
<h1>List of Comments:</h1><br />
 <div style="background-color:rgba(0,0,0,0.1);">&nbsp;&nbsp;&nbsp;&nbsp;<label>NAME</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <label>EMail</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<label>comments</label>&nbsp;&nbsp;&nbsp;&nbsp;
<label>time</label>
<div  style="overflow:scroll; background-color:white;">
<?php
$link = mysqli_connect("localhost", "spidersd_admin","[g%3g!fAXssF", "spidersd_feedback");
   if(!$link)
  die('COULD NOT USE:'. mysqli_error($link));			 
$result=mysqli_query($link,"SELECT * FROM comments;");
mysqli_close($link);
while($row =$result->fetch_array(MYSQLI_ASSOC)){
	echo "<label>&nbsp;&nbsp;&nbsp;&nbsp;{$row['name']}</label>";
	echo "<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{$row['mail']}</label>";
	echo "<label>&nbsp;&nbsp;&nbsp;&nbsp;{$row['comments']}</label>";
	echo "<label>&nbsp;&nbsp;&nbsp;&nbsp;{$row['timstmp']}</label><br />";

}

?>
</div>
</div> 

</div>
</body>
</html>
