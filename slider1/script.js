var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');

var span1 = document.querySelector('.span1');
var span2= document.querySelector('.span2');

span1.addEventListener('click' , s1);
span2.addEventListener('click' , s2);
function s1(){
	if(img1.style.display == "block"){

		img1.style.display = "none";
		img2.style.display = "block";
		img2.style.animation = "slider";
		img2.style.animationDuration = "0.7s";
	}
	else if(img2.style.display =="block"){
		img2.style.display = "none";
		img3.style.display = "block";
		img3.style.animation = "slider";
		img3.style.animationDuration = "0.7s";
	}
	else{
		
		img3.style.display = "none"
		img1.style.display = "block"
		img1.style.animation = "slider";
		img1.style.animationDuration = "0.7s";
	}

}

function s2(){
	if(img1.style.display == "block"){
		img1.style.display = "none";
		img3.style.display = "block";
		img3.style.animation = "slider1";
		img3.style.animationDuration = "0.7s";

	}
	else if(img3.style.display =="block"){
		img3.style.display = "none";
		img2.style.display = "block";
		img2.style.animation = "slider1";
		img2.style.animationDuration = "0.7s";
	}
	else{
		img1.style.display = "block"
		img2.style.display = "none"
		img1.style.animation = "slider1";
		img1.style.animationDuration = "0.7s";
	}

}
