
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question11 = document.quiz.question11.value;
	var correct = 0;


	if (question1 == "Voldemort") {
		correct++ ;
}
	
	if (question2 == "Seven") {
		correct++;
}	
	if (question3 == "31 December") {
		correct++;
    }
    
    if (question4 == "Amortentia") {
		correct++;
    }
    

    if (question5 == "Yew") {
		correct++;
    }
    

    if (question6 == "Parseltongue") {
		correct++;
    }
    

    if (question7 == "Abraxas") {
		correct++;
    }
    

    if (question8 == "Halfblood") {
		correct++;
    }
    

    if (question9 == "Slytherin") {
		correct++;
    }
    

    if (question11 == "Grindlewald") {
		correct++;
    }
    
	
	var pictures = [ "harrypotter.jpg",
					"draco.gif", "smilingtom.gif", "mudblood.gif", "CRUCCIO.gif", "bella.gif" ]
	var messages = ["Are you sure you're not the boy who lived?You know waay too much about the Dark Lord",
	 "The Dark Lord is pleased", 
	 "Voldemort is dissapointed but he will not kill you",
	  "Not bad...for a filthy Mudblood", 
	  "CRUCIO" , 
	   "AVADA KEDAVRAAAAA"];
	var score;

	if (correct == 0 ) {
		score = 5;
    }
    
	if (correct > 0 && correct < 4) {
		score = 4;
	}
    
	if (correct > 3 && correct < 6) {
		score = 3;
	}
    
	if (correct > 5 && correct < 8 ) {
		score = 2;
	}

	if (correct > 7 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}