var score = 0;


//Question 1
	function Question_one(){
		
		$('#franklinR').on('click', function(){//click one brings on an alert saying you got it right as well as one point added to score
		$("#QuesOneAns").slideToggle();
		score++;
		$("#Score").html("Score:" + score);
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
			$("#Score").html("Score:" + score);
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
			$("#Score").html("Score:" + score);
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
		$("#Score").html("Score:" + score);

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
		$("#Score").html("Score:" + score); //When user clicks A tell them they got the right answer
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
		$("#Score").html("Score:" + score);
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
		$("#Score").html("Score:" + score); //When user clicks A tell them they got the right answer
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
			 $("#Score").html("Score:" + score);
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
			 $("#Score").html("Score:" + score);
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
		$('#first').on('click', function(){
			$('#QuesTenAns').slideToggle();
			 score++
			$("#Score").html("Score:" + score);
			});
			
		$('#second').on('click', function(){
 			$("QuesTenWrongA").slideToggle();
 		});
	

		$('#third').on('click', function(){
 			$("#QuesTenWrongB").slideToggle();
 		});
	

		$('#fifth').on('click', function(){
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
