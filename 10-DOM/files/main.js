let button = document.getElementById("button"); 

button.addEventListener("click", function(event) { 

	let proposition = document.getElementById("proposition").value;
    let newElement = document.createElement("li"); 
    newElement.innerText = proposition; 
    document.getElementsByTagName("ul")[0].appendChild(newElement) 

}) 



for (var i = 0; i < lis.length; i++) { 
	let lis = document.querySelectorAll("li"); 
	console.log(lis);
	lis[i].addEventListener('click',function (event){ 
		this.classList.toggle('done') 
	}) 
}