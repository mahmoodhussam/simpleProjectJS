var text = document.querySelector('.pop');
var button = document.querySelector('.btn');
var x = document.querySelector('.X');
var section = document.querySelector('section'); 
button.addEventListener('click' , pops);
x.addEventListener('click' , close);
text.addEventListener('click' , closeS)
function pops() {
	text.style.display = "block";
	section.style.filter = "blur(2px)";
}

function close(e){
	e.preventDefault();
	text.style.display = "none";
	section.style.filter = "blur(0)";
}
function closeS(e) {
var text = document.querySelector('.pop');
	if(e.target.className == 'pop'){
	e.preventDefault();
	text.style.display = "none";
	section.style.filter = "blur(0)";
	}
}