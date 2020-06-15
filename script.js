var input1=document.getElementById("color1");
var input2=document.getElementById("color2");
var body=document.getElementById("body");
var css=document.querySelector("h3");
var button=document.getElementById("btn");
function getcolor(){
var char='1234567890ABCDEF'
var color='#'
for(i=0;i<6;i++){
	color+=char[Math.floor(Math.random()*16)]}
return color;
}

css.textContent=body.style.background
function backgroundcolor(){
		body.style.background=
	"linear-gradient(to right,"+input1.value+",	"+input2.value+")";
css.textContent=body.style.background
}
function setrandomcolor(){
	input1.value=getcolor();
	input2.value=getcolor();
	backgroundcolor();
}
input1.addEventListener("input",backgroundcolor)
input2.addEventListener("input",backgroundcolor)
button.addEventListener("click",setrandomcolor)
button.addEventListener("click",function(){console.log("h")})