var score = 0;
var name =prompt("What is your name?");


//Question 1
	function Question_one(){
		
		$('#franklinR').on('click', function(){//click one brings on an alert saying you got it right as well as one point added to score
		$("#QuesOneAns").slideToggle();
		score++;
		$("#Score").html("Correct Answers:" + score + " of 10");
		});


		$('#Grover').on('click', function(){
 		$("#QuesOneWrongB").slideToggle();
 		});
	

	$('#Ted_R').on('click', function(){
 		$("#QuesOneWrongC").slideToggle();
 		});
	

	$('#JFK').on('click', function(){
 		$("#QuesOneWrongD").slideToggle();
 		});
	}


//Question 2
	function Question_two(){
		$('#georgeTown').on('click', function(){
				$("#QuesTwoAns").slideToggle();
				score++;
			$("#Score").html(name +" 's "+ "Correct Answers:" + score + " of 10");
		});

		$('#dupontCircle').on('click', function(){
 			$("#QuesTwoWrongA").slideToggle();
 		});
	

		$('#adamsMorgan').on('click', function(){
 			$("#QuesTwoWrongC").slideToggle();
 		});
	

		$('#columbiaHeights').on('click', function(){
 			$("#QuesTwoWrongD").slideToggle();
 		});
	}
	
//Question 3 
	function Question_three(){
		$('#cia').on('click', function(){
			$("#QuesThreeAns").slideToggle();
				score++;
			$("#Score").html("Correct Answers:" + score + " of 10");
		});

			$('#fbi').on('click', function(){
 				$("#QuesThreeWrongB").slideToggle();
 		});
	

		$('#irs').on('click', function(){
 			$("#QuesThreeWrongC").slideToggle();
 		});
	

		$('#nasa').on('click', function(){
 			$("#QuesThreeWrongD").slideToggle();
		});
	}	
//Question 4 
	function Question_four(){
		$('#darthVader').on('click', function(){
			$("#QuesFourAns").slideToggle();
			score++;
		$("#Score").html("Correct Answers:" + score + " of 10");

		});

		$('#mickeyMouse').on('click', function(){
 			$("#QuesFourWrongA").slideToggle();
 		});
	

		$('#snowMan').on('click', function(){
 			$("#QuesFourWrongC").slideToggle();
 		});
	

		$('#scar').on('click', function(){
 			$("#QuesFourWrongD").slideToggle();
		});
			 
	}
//Question 5 
	function Question_five(){
		$('#fedCity').on('click', function(){
			$("#QuesFiveAns").slideToggle();
			score++;
		$("#Score").html("Correct Answers:" + score + " of 10"); //When user clicks A tell them they got the right answer
			});

		$('#commonsCity').on('click', function(){
 			$("#QuesFiveWrongA").slideToggle();
 		});
	

		$('#washingtonCity').on('click', function(){
 			$("#QuesFiveWrongB").slideToggle();
 		});
	

		$('#capCity').on('click', function(){
 			$("#QuesFiveWrongC").slideToggle();
		});
	}

//Question 6
	function Question_six(){
		$('#ra').on('click', function(){
			$("#QuesSixAns").slideToggle();
			score++;
		$("#Score").html("Correct Answers:" + score + " of 10");
			});  

		$('#anti').on('click', function(){
 			$("#QuesSixWrongB").slideToggle();
 		});
	

		$('#nemty').on('click', function(){
 			$("#QuesSixWrongC").slideToggle();
 		});
	

		$('#shesmu').on('click', function(){
 			$("#QuesSixWrongD").slideToggle();
		});
		
	}
//Question 7
	function Question_seven(){
		$('#lEnfant').on('click', function(){
			$("#QuesSevAnsA").slideToggle();
			score++; 
		$("#Score").html("Correct Answers:" + score + " of 10"); //When user clicks A tell them they got the right answer
		});

		$('#georgeW').on('click', function(){
 			$("#QuesSevWrongB").slideToggle();
 		});
	

		$('#benjamin').on('click', function(){
 			$("#QuesSevWrongC").slideToggle();
 		});
	

		$('#olmstead').on('click', function(){
 			$("#QuesSevWrongD").slideToggle();
		});
	}

//Question 8
	function Question_eight(){
		$('#bruce').on('click', function(){
			 $('#QuesEightAns').slideToggle();
			 score++;
			 $("#Score").html("Correct Answers:" + score + " of 10");
		});

		$('#strangers').on('click', function(){
 			$("#QuesEightWrongA").slideToggle();
 		});
	

		$('#traffic').on('click', function(){
 			$("#QuesEightWrongC").slideToggle();
 		});
	

		$('#exorcist').on('click', function(){
 			$("#QuesEightWrongD").slideToggle();
		});
	}

//Question 9
	function Question_nine(){
		$('#fiveHundred').on('click', function(){
		 $('#QuesNineAns').slideToggle();
			 score++; 
			 $("#Score").html("Correct Answers:" + score + " of 10");
		});

		$('#one').on('click', function(){
 			$("#QuesNineWrongA").slideToggle();
 		});
	

		$('#onePointFive').on('click', function(){
 			$("#QuesNineWrongC").slideToggle();
 		});
	

		$('#twoMillion').on('click', function(){
 			$("#QuesNineWrongD").slideToggle();
		});
	}



//Question 10
	function Question_ten(){
		$('#third').on('click', function(){
			$('#QuesTenAns').slideToggle();//if correct answer clicked
			 score++                       //add one to score
			$("#Score").html("Correct Answers:" + score + " of 10"); // alert amount of questions right out of 10
			});
			
		$('#second').on('click', function(){ //if clicked slide down wrong
 			$("QuesTenWrongA").slideToggle();
 		});
	

		$('#first').on('click', function(){ //if clicked slide down wrong
 			$("#QuesTenWrongB").slideToggle();
 		});
	

		$('#fifth').on('click', function(){ //if clicked slide down wrong 
 			$("#QuesTenWrongD").slideToggle();
		});
	}
//invoke functions
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
