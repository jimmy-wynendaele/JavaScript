
// Ex 1

let selectBody = document.body;
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");
let firstPar = document.getElementById("first-paragraph");
let classLength =firstPar.classList.length;

for(let i = 0 ; i<classLength;i++){
	let firstClass = firstPar.classList[0];
	firstPar.classList.remove(firstClass);

}

firstPar.classList = "aqua";

let allElements = document.getElementsByTagName('*');
console.log(allElements);

for(i=0 ; i<allElements.length ; i++){
	
	for(let j=0; j<allElements[i].classList.length ; j++)
		
		if(allElements[i].classList[j]=="bg-silver"){

			allElements[i].classList.add("bg-teal");
			allElements[i].classList.remove("bg-silver");
			console.log(allElements[i].classList);
		}
}

let blockTag = document.getElementsByTagName('blockquote');

	for (var i = blockTag.length - 1; i >= 0; i--) {
		blockTag[i].classList.add("bg-white");
}


console.log(blockTag);


// Ex 2

tableId = document.querySelector('#my-table');

tableId.classList.add('bg-purple');

let PTag = document.querySelectorAll('p');

for (var i = PTag.length - 1; i >= 0; i--) {
	PTag[i].classList.add('shadow');
}


// Ex 3

let preTag = document.querySelector('pre');
console.log(preTag);

preTag.style.color = "blue";
preTag.style.background = "black";
preTag.style["border-top"] = "3px solid red";
preTag.style["border-bottom"] = "3px solid red";

let h3Tag = document.querySelector('h3');

h3Tag.innerHTML = "<em>Italic title ! yeah !</em>";

let h2Tag = document.querySelector('h2');
console.log(h2Tag);
h2Tag.innerHTML = "<strong>HTML doens't work !</strong>";

// Ex 4.1

let ulTag = document.querySelector('ul');
ulTag.innerHTML+= "\n\t <li>Mon meilleur ami est <a href='http://www.google.com'>Google</a> \n\t";
let link = ulTag.querySelector('a');
link.style.color = "red";

// Ex 4.2

let olTag = document.querySelector('ol');
console.log(olTag.children[0]);
for (var i = olTag.children.length - 1; i >= 0; i--) {
	olTag.removeChild(olTag.children[i]);
}


let tableau = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (var i = tableau.length - 1; i >= 0; i--) {
	list = document.createElement('li');
	list = tableau[i];
	console.log(list);
	olTag.innerHTML+= "\n\t" + list + "\n\t";
}

console.log(olTag.innerHTML);
























