// Ex 1 Changing DivColor on keyboard event
// for numbers 0 to 9 with keyCode 48 to 57. 

let keyDiv = document.querySelector('#character');

/*
document.addEventListener('keydown',function(e){

	console.log(e.keyCode);

	switch(e.keyCode){

		case 48:

			keyDiv.style.background = "red";
			break;

		case 49:

			keyDiv.style.background = "blue";
			break;

		case 50:

			keyDiv.style.background = "green";
			break;

		case 51:

			keyDiv.style.background = "yellow";
			break;

		case 52:

			keyDiv.style.background = "black";
			break;

		case 53:

			keyDiv.style.background = "purple";
			break;

		case 54:

			keyDiv.style.background = "skyblue";
			break;

		case 55:

			keyDiv.style.background = "orange";
			break;

		case 56:

			keyDiv.style.background = "brown";
			break;

		case 57:

			keyDiv.style.background = "olive";
			break;


		default:

			keyDiv.innerHTML = "Not Hello"

	}

})
*/


let listColors = ["red","blue","yellow","orange","black","orange","purple","skyblue","grey","green"];
let listNumbers = [48,49,50,51,52,53,54,55,56,57];


document.addEventListener('keydown',function(e){

	for(let a=0 ; a<listNumbers.length ; a++){

	console.log(a);
	if(e.keyCode == listNumbers[a]){

			keyDiv.style.background = listColors[a];

		}

	}

})

// Ex2 add class opacity to up down left right divs 
// when one of the arrow keys is being pressed down and remove the class when arrow key is released


let arrowDiv = document.querySelectorAll('#up,#down,#left,#right');


document.addEventListener('keydown', function(e){

	console.log(e.keyCode);
	
	switch(true){

		case (e.keyCode>=37 && e.keyCode<=40):

			for(let i=0 ; i<arrowDiv.length ; i++){
				arrowDiv[i].className = "highlight";		
			}

		default:

			for(let i=0 ; i<arrowDiv.length ; i++){

				arrowDiv[i].innerHTML = "Not an arrow key";

			}
			
	}

})

document.addEventListener('keyup', function(e){

	console.log(e.keyCode);
	
	switch(true){

		case (e.keyCode>=37 && e.keyCode<=40):

			for(let i=0 ; i<arrowDiv.length ; i++){
				arrowDiv[i].className = "";		
			}
			
	}

})











