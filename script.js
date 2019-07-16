function scroll()

{var menu=document.getElementById("D1");
	var logo=document.getElementById("logo");
	if( window.pageYOffset >=700 )
	{
		menu.classList.add("fixedmenu");
		menu.classList.remove("menu");
		logo.src="img/logo1.png";
	}
	else
	{

		menu.classList.remove("fixedmenu");
		menu.classList.add("menu");
		logo.src="img/full_logo.png";
	}
}
function validate()
            	{  if( document.myForm.name.value == "" )
                	{ alert( "Please provide your name..!" );
                  	document.myForm.name.focus() ;
                  	return false;
                	}
              		if( document.myForm.email.value == "" )
               { alert( "Please provide your email...!" );
                 document.myForm.email.focus() ;
                 return false;
               } 
               if( document.myForm.comments.value == "" )
               { alert( "Please provide any feedback...!" );
                 document.myForm.comments.focus() ;
                 return false;
               } 
  	      
             return( true );
            }
function read(N,this1)
{	var para,this2,this3,LID;
	if(N==100)
	{	 para=document.getElementById('demo');
		 this2="Read Less";
		 this3="Read More";
	}
	else
	{
	 LID="OL"+N;
	 para=document.getElementById(LID);
	 this2="-";
	 this3="+";
	}
	if((para.style.display=="block"))
	{
		para.style.display="none";
		this1.innerHTML=this3;
	
	}	
	else
	{	para.style.display="block";
		this1.innerHTML=this2;
		}
}
var c=0;	
var myVar = setInterval(myTimer, 4000);

function jump(r)
{
c=r;
var LIID1="gfg"+c;
if(c==0)
c=4;
var a,b,d;
	a=(c+1)%4;
	b=(c+2)%4;
	d=(c+3)%4;
	var LIID2="gfg"+a;
	var LIID3="gfg"+b;
	var LIID4="gfg"+d;

	var list1=document.getElementById(LIID1);
	var list2=document.getElementById(LIID2);
	var list3=document.getElementById(LIID3);
	var list4=document.getElementById(LIID4);
	list1.style.backgroundColor="#000";
	list2.style.backgroundColor="rgba(0,0,0,0)";
	list3.style.backgroundColor="rgba(0,0,0,0)";
	list4.style.backgroundColor="rgba(0,0,0,0)";
	var thgt=document.getElementById('thgt');
var nme=document.getElementById('nme');

switch(c-1)
{
case 0:
thgt.innerHTML="\"Thought no.2\"";
nme.innerHTML="-XYZ2, AP, CSE,THDC-IHET";
break;	
case 1:
thgt.innerHTML="\"Thought no.3\"";
nme.innerHTML="-XYZ3, AP, CSE,THDC-IHET";
break;	
case 2:
thgt.innerHTML="\"Thought no.4\"";
nme.innerHTML="-XYZ4, AP, CSE,THDC-IHET";
break;	
case 3:
thgt.innerHTML="\"Thought no.1\"";
nme.innerHTML="-XYZ1, AP, CSE,THDC-IHET";	
break;
}
c=(c+1)%4;
}
function myTimer() {
var a,b,d;
c=(c+1)%4;
	a=(c+1)%4;
	b=(c+2)%4;
	d=(c+3)%4;
	var LIID2="gfg"+a;
	var LIID3="gfg"+b;
	var LIID4="gfg"+d;
	var LIID1="gfg"+c;
	var list1=document.getElementById(LIID1);
	var list2=document.getElementById(LIID2);
	var list3=document.getElementById(LIID3);
	var list4=document.getElementById(LIID4);
	list1.style.backgroundColor="#000";
	list2.style.backgroundColor="rgba(0,0,0,0)";
	list3.style.backgroundColor="rgba(0,0,0,0)";
	list4.style.backgroundColor="rgba(0,0,0,0)";
	var thgt=document.getElementById('thgt');
var nme=document.getElementById('nme');
var x;
if(c==0)
x=3;
else 
x=c-1;
switch(x)
{
case 0:
thgt.innerHTML="\"Thought no.2\"";
nme.innerHTML="-XYZ2, AP, CSE,THDC-IHET";
break;	
case 1:
thgt.innerHTML="\"Thought no.3\"";
nme.innerHTML="-XYZ3, AP, CSE,THDC-IHET";
break;	
case 2:
thgt.innerHTML="\"Thought no.4\"";
nme.innerHTML="-XYZ4, AP, CSE,THDC-IHET";
break;	
case 3:
thgt.innerHTML="\"Thought no.1\"";
nme.innerHTML="-XYZ1, AP, CSE,THDC-IHET";	
break;
}
}
$(document).ready(function(){
  $("a").on('click', function(event) {
  if (this.hash !== "") {
      event.preventDefault();
   var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
       window.location.hash = hash;
      });
    } 
  });
});
