var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var contant1 = document.querySelector('.contant1');
var contant2 = document.querySelector('.contant2');
button1.addEventListener('click' , display1);
button2.addEventListener('click' , display2);
function display1(e) {
	 e.preventDefault()
	contant1.style.display = "none";
	contant2.style.display = "block";
}
function display2(e){
	 e.preventDefault()
	contant1.style.display = "block";
	contant2.style.display = "none";
}