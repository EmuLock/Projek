
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question3 = document.quiz.question4.value;
    var question3 = document.quiz.question5.value;
    var question3 = document.quiz.question6.value;
    var question3 = document.quiz.question7.value;
    var question3 = document.quiz.question8.value;
    var question3 = document.quiz.question9.value;
    var question3 = document.quiz.question11.value;
	var correct = 0;


	if (question1 == "Voldemort") {
		correct++;
}
	if (question2 == "Seven") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["The Dark Lord is pleased", "Voldemort is dissapointed but he will not kill you", "Not bad...for a filthy Mudblood", "CRUCIO" ,  "AVADA KEDAVRAAAAA"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 9) {
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