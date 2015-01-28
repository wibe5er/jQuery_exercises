$(document).ready(function() {

// input:	$("input[type=text]").val();

$("form").on("submit", function (e) {
		e.preventDefault();
		var submission = "<span>"+ $("input[type=text]").val() + "</span>";
		var checkbox = "<input type=checkbox class=checkboxstyle>";
		var removeButton = "<button>remove</button>";
		$("ul").append("<li>"+ checkbox+ submission+ removeButton+ "</li>");
		$("input[type=text]").val("");
	});


//why does the below not work when saying   $("ul").on("click", "input[type=checkbox]", function (e) {

$("body").on("click", "input[type=checkbox]", function (e) {
	console.log("alrghty");
	$(this).next().toggleClass("completed");
	 });

$("body").on("click", "button", function (e) {
	$(this).parent().remove();
});

});