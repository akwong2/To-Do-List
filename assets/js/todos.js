// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// deletes li when span is clicked
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// set new todo input into a variable
		let todoText = $(this).val();
		// append to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		// clear input
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type=text]").fadeToggle();
})