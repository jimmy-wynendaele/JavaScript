
// ex 1 load the json file

var req = new XMLHttpRequest();
req.onload = function(){

	let jsonText = req.responseText;
	let textParsed = JSON.parse(jsonText);
	
	


	// ex 2 add a randomscore 

	let randomNumber;
	for(let i =0; i<textParsed.length ; i++){

		randomNumber = Math.random()*1000;
		textParsed[i]["score"] = randomNumber;
	}

	// ex 3 Sort the array

	
	let copy;

	for(let a=0 ; a<=99 ; a++){

		for( let j =0; j<textParsed.length-1 ; j++){

			if(textParsed[j]["score"] > textParsed[j+1]["score"]){

				copy = textParsed[j+1];

				textParsed[j+1] = textParsed[j];
				textParsed[j] = copy;

			}

		}
	}

	// ex 4 categories

	let categoryA = [];
	let categoryB = [];
	let categoryC = [];

	textParsed.forEach(function(entry){

	if(entry["score"]>750){

			categoryA.push(entry);

		}else if(entry["score"]>500){

			categoryB.push(entry);

		} else{

			categoryC.push(entry);

		}
	});

	// ex 5 Bahrain people

	let BahrainCheck = function(value){

		return value.country == "Bahrain";

	}

	let Bahrain = textParsed.filter(BahrainCheck);

	// ex 6 & 7 highscore and lowscore

	let highestScore = textParsed[(textParsed.length-1)]["score"];
	let lowestScore = textParsed[0]["score"];

	// ex 8 affichage dans fichier html

	function showInHtml(){

		let listHtml = document.createElement('li');
		console.log(typeof listHtml);
		
		textParsed.forEach(function(entry,index){

			let ulTag = document.querySelector('ul');
			ulTag.style.color = "grey";

			for(let prop in entry){

				console.log(Object.values(prop))

			};

		})
		

	}


	console.log(textParsed);
	
	console.log(categoryA,categoryB,categoryC);

	console.log(Bahrain);
	console.log(Bahrain.length);

	console.log(highestScore);
	console.log(lowestScore);

	showInHtml();
}

req.open("GET", "data.json", true);

req.send(null);











