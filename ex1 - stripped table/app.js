$(document).ready(function() {

	//var input = $("input[type=text]").val();
	$("form").on("submit", function (e) {
		e.preventDefault();
		$("tbody tr:even").css("background", $("input[type=text]").val());
	});

});