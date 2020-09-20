var point=document.querySelectorAll(".point");
var curve=document.querySelectorAll(".curve");
var curve2=document.querySelectorAll(".curve2");
var numInput=document.querySelector("input");
var number=document.querySelectorAll(".numb");
var dir=document.querySelector("#dir");

/* a is to keep track of point and initiating with 1 */
var a = 1;

/* to keep track of direction */
var direction = "Forward";

/* for displaying 1 as selected point when opening the page */
selectPoint();

/* for placing number marks in position*/
for(var i=0;i<10;i++)
{
	var y=17+7.2*i;
	point[i].style.left = y + '%'; 
}

/* for placing numbers in position*/
for(var i=0;i<10;i++)
{
	var y=16.8+7.18*i;
	number[i].style.left = y + '%'; 
}

/* for placing arrows in forward direction in position*/
for(var i=0;i<9;i++)
{
	var y=17+7.2*i;
	curve[i].style.left = y + '%'; 
}

/* for placing arrows in reverse direction in position*/
for(var i=0;i<9;i++)
{
	var y=17+7.2*i;
	curve2[i].style.left = y + '%'; 
}

/* changing selected point after taking input */
numInput.addEventListener("change", function(){
    
    /* removing selected-point from old-position */
	for(var i=0;i<10;i++)
    { 
	  point[i].classList.remove("selected-point");
    }

    /* removing highlighted number */
	for(var i=0;i<10;i++)
    { 
	  number[i].classList.remove("select-bold");
    }

    /* removing arrows from old-position */
 	for(var i=0;i<9;i++)
    { 
	  curve[i].style.opacity="0";
	  curve2[i].style.opacity="0";
    }
    
    /* storing value of input */
	a = numInput.value;

	/* changing selected point*/
    selectPoint();
});

/* changing direction after taking input */
dir.addEventListener("change", function(){
    
    /* removing selected-point from old-position */
	for(var i=0;i<10;i++)
    { 
	  point[i].classList.remove("selected-point");
    }
    
    /* removing arrows from old-position */
 	for(var i=0;i<9;i++)
    { 
	  curve[i].style.opacity="0";
	  curve2[i].style.opacity="0";
    }

    /* removing highlighted number */
	for(var i=0;i<10;i++)
    { 
	  number[i].classList.remove("select-bold");
    }
    
    /* storing value of input */
	direction=dir.value;

	/* changing selected point*/
    selectPoint();
});

/* For changing selected point*/
function selectPoint(){

	if(direction === "Forward")
	{
		var x=a-1;
        
        /* choosing selected point*/
	    point[x].classList.add("selected-point");
        var y=17 + 7.2*x;
        point[x].style.left= y + '%';
        
        /* choosing arrow*/
        curve[x].style.opacity="1";
        
        /* highlighting number*/
        number[x].classList.add("select-bold");
    }
    else
    {
    	var x=a-1;
    	var z=a-2;
        
        /* choosing selected point*/
    	point[x].classList.add("selected-point");
        var y=17 + 7.2*x;
        point[x].style.left= y + '%';
        
        /* choosing arrow*/
        curve2[z].style.opacity="1";

        /* highlighting number*/
        number[x].classList.add("select-bold");
    }
}