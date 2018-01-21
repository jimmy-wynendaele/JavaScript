let textInput = document.querySelector('#textinput');

textInput.addEventListener('click',function(){

	this.placeholder = "";


})

ul = document.querySelector('ul');

let submitButton = document.querySelector('#button');

let li = document.querySelectorAll('li');

submitButton.addEventListener('click',function(){

	let list = document.createElement('li');
	list.innerHTML = textInput.value;

	ul.appendChild(list);

	li[3] = list;
	console.log(li);


})

window.addEventListener('keydown', function(event){


	if(event.code == "Enter"){


	list = document.createElement('li');
	list.innerHTML = textInput.value;

	ul.appendChild(list);
	li[li.length] = list;
	console.log(li);

	}


})

for(let i=0 ; i<ul.children.length ; i++){

	ul.children[i].addEventListener('click', function(){
	
			this.classList.add("done");
	
	})

}



for(i=0; i<li.length; i++){

	li[i].addEventListener('click',function(){

		this.classList.add("done");

	})

}