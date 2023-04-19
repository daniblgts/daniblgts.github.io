function see(){
	let show = document.getElementById("show");
	let see = document.getElementById("see");
	
	if(see.classList.contains("hidden")){
		see.classList.remove("hidden");
		show.innerHTML = "Show Less...";
	}
	else{
		see.classList.add("hidden");
		show.innerHTML = "See More...";
	}
}
function more(){
	let less = document.getElementById("less");
	let more = document.getElementById("more");
	
	if(more.classList.contains("hidden")){
		more.classList.remove("hidden");
		less.innerHTML = "Show Less...";
	}
	else{
		more.classList.add("hidden");
		less.innerHTML = "See More...";
	}
}

function showResults(){
	let result = document.getElementById("result");
	let questionone = document.getElementById("question-one").value;
	let questiontwo = document.getElementById("question-two").value;
	let questionthree = document.getElementById("question-three").value;
	let questionfour = document.getElementById("question-four").value;
	let total = 0;
	let x = "";
	
	if(questionone == "DOCTYPE! html"){
		x += " Question 1 - Correct ";
		total ++;
	}
	else{
		x += " Question 1 - Incorrect ";
	}
	
	if(questiontwo == "/html"){
		x += " Question 2 - Correct ";
		total ++;
	}
	else{
		x += " Question 2 - Incorrect ";
	}
	
	if(questionthree == "if else"){
		x += " Question 3 - Correct ";
		total ++;
	}
	else{
		x += " Question 3 - Incorrect ";
	}
	
	if(questionfour == "document.getElementById"){
		x += " Question 4 - Correct ";
		total ++;
	}
	else{
		x += " Question 4 - Incorrect ";
	}
	
	result.innerHTML += "<p>Score:" + total+ "/4</p>";
	result.innerHTML += x;
}

function changeSlide(){
	let image1=document.getElementById("kafka");
	let image2=document.getElementById("bun");
	let image3=document.getElementById("climb");
	let image4=document.getElementById("septum");
	
	if(!image1.classList.contains("hidden")){
		image1.classList.add("hidden");
		image2.classList.remove("hidden");
	}
	
	else if(!image2.classList.contains("hidden")){
		image2.classList.add("hidden");
		image3.classList.remove("hidden");
	}
	else if(!image3.classList.contains("hidden")){
		image3.classList.add("hidden");
		image4.classList.remove("hidden");
	}
	else if(!image4.classList.contains("hidden")){
		image4.classList.add("hidden");
		image1.classList.remove("hidden");
	}
}
setInterval(changeSlide, 5000);