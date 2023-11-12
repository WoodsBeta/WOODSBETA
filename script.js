var subjects = document.querySelectorAll(".subject");
subjects.forEach(function(subject) {
	subject.addEventListener("click", function() {
		alert("You clicked on " + this.textContent);
	});
});
