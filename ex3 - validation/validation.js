$(document).ready(function() {
  	var counter = 0;
	
//check when user types if password is >6

	$("form").on("keydown", function (e){
		console.log("counter is" + counter);
		counter = counter + 1;

//make sure that backspace subtracts amount of characters		

if (event.keyCode === 8) {
		counter = counter -2;
	} 

	if(counter < 6 && $("h1").val().length === 0) {
		$("h1").text("You're a daredevil. Make it longer than six characters");
		}
	else {
		$("h1").text("");
	}	

	});

// Now check when user submits

$("form").on("submit", function (e) {
	if (counter < 6){
		e.preventDefault();
		alert("Dude, what did I tell you?!");
	}
	else {
		$("form").fadeOut(1000);
		setTimeout(function() {
		$(".afterSubmission").fadeIn(2000);
      // Do this after 5 seconds
		}, 1000);	
	}
});

});