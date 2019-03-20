//Restart game button

var restart = document.querySelector('#b')

// grabs all the square

var square = document.querySelectorAll('td')

// clear all the square

function clearboard() {
for( var i=0 ; i<square.length ; i++)
{
square[i].textContent = " ";
}}

restart.addEventListener("click",clearboard);	
 
 // check square maker
 /*var cellone = document.querySelector('#one')
 
 cellone.addEventListener("click",function(){
	 if (cellone.textContent == "")
	 {
		 cellone.textContent = "X";
 }
 else if (cellone.textContent  == "X")
 {
	 cellone.textContent = "O";
 }
 else {
	 cellone.textContent = "";
 }})*/
 
 // change maker another way
function changeMaker()
{
if (this.textContent == "")
{
this.textContent = "X";
this.style.color = "red"
}
else if (this.textContent == "X")
{
this.textContent = "O";
this.style.color = "blue"
}
else
{
this.textContent = "";
}
}

for( var i=0; i<square.length ; i++)
{
square[i].addEventListener("click",changeMaker)
}	