
var score = 0;//score starts at 0 for every game
var name =prompt("What is your name?");//user input for name
currentScore();//When invoked, will show users name along with scor





//Question 1
//if correct answer clicked toggle slide down. Add one to current score
	function Question_one(){
		
		$('#franklinR').on('click', function(){
		$("#QuesOneAns").slideToggle();
		score++;
		currentScore()
		});

		//If clicked these will toggle wrong answer slide down aling with current score
		$('#Grover').on('click', function(){
 		$("#QuesOneWrongB").slideToggle();
 		currentScore()
 		});
	

	$('#Ted_R').on('click', function(){
 		$("#QuesOneWrongC").slideToggle();
 		currentScore()
 		});
	

	$('#JFK').on('click', function(){
 		$("#QuesOneWrongD").slideToggle();
 		currentScore()
 		});
	}


//Question 2
//if correct answer clicked toggle slide down. Add one to current score
	function Question_two(){
		$('#georgeTown').on('click', function(){
				$("#QuesTwoAns").slideToggle();
				score++;
			currentScore()
		});
		//If clicked these will toggle wrong answer slide down aling with current score
		$('#dupontCircle').on('click', function(){
 			$("#QuesTwoWrongA").slideToggle();
 			currentScore()
 		});
	

		$('#adamsMorgan').on('click', function(){
 			$("#QuesTwoWrongC").slideToggle();
 			currentScore()
 		});
	

		$('#columbiaHeights').on('click', function(){
 			$("#QuesTwoWrongD").slideToggle();
 			currentScore()
 		});
	}
	
//Question 3 
//if correct answer clicked toggle slide down. Add one to current score
	function Question_three(){
		$('#cia').on('click', function(){
			$("#QuesThreeAns").slideToggle();
				score++;
			currentScore()
		});
		//If clicked these will toggle wrong answer slide down aling with current score
			$('#fbi').on('click', function(){
 				$("#QuesThreeWrongB").slideToggle();
 				currentScore()
 		});
	

		$('#irs').on('click', function(){
 			$("#QuesThreeWrongC").slideToggle();
 			currentScore()
 		});
	

		$('#nasa').on('click', function(){
 			$("#QuesThreeWrongD").slideToggle();
 			currentScore()
		});
	}	
//Question 4 
//if correct answer clicked toggle slide down. Add one to current score
	function Question_four(){
		$('#darthVader').on('click', function(){
			$("#QuesFourAns").slideToggle();
			score++;
			currentScore();

		});
		//If clicked these will toggle wrong answer slide down aling with current score
		$('#mickeyMouse').on('click', function(){
 			$("#QuesFourWrongA").slideToggle();
 			currentScore();
 		});
	

		$('#snowMan').on('click', function(){
 			$("#QuesFourWrongC").slideToggle();
 			currentScore();
 		});
	

		$('#scar').on('click', function(){
 			$("#QuesFourWrongD").slideToggle();
 			currentScore();
		});
			 
	}
//Question 5 
//if correct answer clicked toggle slide down. Add one to current score
	function Question_five(){
		$('#fedCity').on('click', function(){
			$("#QuesFiveAns").slideToggle();
			score++;
			currentScore();
		
			});
		//If clicked these will toggle wrong answer slide down aling with current score
		$('#commonsCity').on('click', function(){
 			$("#QuesFiveWrongA").slideToggle();
 			currentScore();
 		});
	

		$('#washingtonCity').on('click', function(){
 			$("#QuesFiveWrongB").slideToggle();
 			currentScore();
 		});
	

		$('#capCity').on('click', function(){
 			$("#QuesFiveWrongC").slideToggle();
 			currentScore();
		});
	}

//Question 6
//if correct answer clicked toggle slide down. Add one to current score
	function Question_six(){
		$('#ra').on('click', function(){
			$("#QuesSixAns").slideToggle();
			score++;
			currentScore();
			});  

		//If clicked these will toggle wrong answer slide down along with current score
		$('#anti').on('click', function(){
 			$("#QuesSixWrongB").slideToggle();
 			currentScore();
 		});
	

		$('#nemty').on('click', function(){
 			$("#QuesSixWrongC").slideToggle();
 			currentScore();
 		});
	

		$('#shesmu').on('click', function(){
 			$("#QuesSixWrongD").slideToggle();
 			currentScore();
		});
		
	}
//Question 7
//if correct answer clicked toggle slide down. Add one to current score
	function Question_seven(){
		$('#lEnfant').on('click', function(){
			$("#QuesSevAnsA").slideToggle();
			score++; 
			currentScore();
		});
		//If clicked these will toggle wrong answer slide down along with current score
		$('#georgeW').on('click', function(){
 			$("#QuesSevWrongB").slideToggle();
 			currentScore();
 		});
	

		$('#benjamin').on('click', function(){
 			$("#QuesSevWrongC").slideToggle();
 			currentScore();
 		});
	

		$('#olmstead').on('click', function(){
 			$("#QuesSevWrongD").slideToggle();
 			currentScore();
		});
	}

//Question 8
//if correct answer clicked toggle slide down. Add one to current score
	function Question_eight(){
		$('#bruce').on('click', function(){
			 $('#QuesEightAns').slideToggle();
			 score++;
			 currentScore();
		});

		//If clicked these will toggle wrong answer slide down along with current score
		$('#strangers').on('click', function(){
 			$("#QuesEightWrongA").slideToggle();
 			currentScore();
 		});
	

		$('#traffic').on('click', function(){
 			$("#QuesEightWrongC").slideToggle();
 			currentScore();
 		});
	

		$('#exorcist').on('click', function(){
 			$("#QuesEightWrongD").slideToggle();
 			currentScore();
		});
	}

//Question 9
//if correct answer clicked toggle slide down. Add one to current score
	function Question_nine(){
		$('#fiveHundred').on('click', function(){
		 $('#QuesNineAns').slideToggle();
			 score++; 
			 $("#Score").html(name +" 's "+ "Correct Answers:" + score + " of 10");
		});
		
		//If clicked these will toggle wrong answer slide down aling with current score
		$('#one').on('click', function(){
 			$("#QuesNineWrongA").slideToggle();
 			currentScore();
 		});
	

		$('#onePointFive').on('click', function(){
 			$("#QuesNineWrongC").slideToggle();
 			currentScore();
 		});
	

		$('#twoMillion').on('click', function(){
 			$("#QuesNineWrongD").slideToggle();
 			currentScore();
		});
	}



//Question 10
	//if correct answer clicked toggle slide down. Add one to current score
	function Question_ten(){
		$('#third').on('click', function(){
			$('#QuesTenAns').slideToggle();
			 score++  
			 finalScore();
			});

		//If clicked these will toggle wrong answer slide down aling with FINAL score
		$('#second').on('click', function(){ 
 			$("QuesTenWrongA").slideToggle();
 			finalScore();
 		});
	

		$('#first').on('click', function(){ 
 			$("#QuesTenWrongB").slideToggle();
 			finalScore();
 		});
	

		$('#fifth').on('click', function(){ 
 			$("#QuesTenWrongD").slideToggle();
 			finalScore();
		});
	}
//When invoked, will show the Current score out of 10
function currentScore(){
	$("#Score").html(name +" 's "+ "Correct Answers:" + score + " of 10");
}


//On final question, when you click it will alert you of your final score
function finalScore(){
	$("#Score").html("You got " + score + " of 10 " + "correct !!!!");
}


//invoke Question functions
Question_one();
Question_two();
Question_three();
Question_four();
Question_five();
Question_six();
Question_seven();
Question_eight();
Question_nine();
Question_ten();
