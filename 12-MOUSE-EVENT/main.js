// Ex 1

let hoverDiv = document.querySelectorAll('.hoverMe');
console.log(hoverDiv);





for(let i = 0 ; i<hoverDiv.length ; i++){

	hoverDiv[i].addEventListener('mouseover', function(event){

	hoverDiv[i].style.visibility = "hidden";


	});

}

// Ex 2

let image = document.createElement("img");

let resetDiv = document.querySelector('.reset');
resetDiv.addEventListener('click',function(){
	for(let i = 0 ; i<hoverDiv.length ; i++){

		if(hoverDiv[i].style.visibility == "hidden"){

			hoverDiv[i].style.visibility = "visible";
			document.body.style.background = "skyblue";
			image.src = "https://churchpop.com/wp-content/uploads/2017/01/111-700x438.jpg";
			document.body.appendChild(image);
			console.log(image);

		}

	}
})


// Ex 3

xAxis = document.querySelector(".axe-x");
yAxis = document.querySelector(".axe-y");

document.body.addEventListener('mousemove', function(event){

	xAxis.innerHTML = event.x;
	yAxis.innerHTML = event.y;

})
















