var req = new XMLHttpRequest();
req.onload = function(){

	let handleHover = function(event){

		style.display = "none";

	};

	let hoverDiv = document.querySelector('.hoverMe');
	hoverDiv.addEventListener('mouseover',handleHover);

}

req.send(null);