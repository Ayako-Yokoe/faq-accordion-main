const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	question.addEventListener("click", toggleAnswer);
	question.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleAnswer.call(question)
		}
	})
})

function toggleAnswer() {
	let targetId = this.getAttribute("aria-controls");
	let targetAnswer = document.getElementById(targetId);
	let isExpanded = this.getAttribute("aria-expanded") === "true";

	this.setAttribute("aria-expanded", !isExpanded);
	targetAnswer.classList.toggle("hidden", isExpanded);
	targetAnswer.classList.toggle("visible", !isExpanded);

	const button = this.closest(".question-wrapper").querySelector("button");

	const plusIcon = button.querySelector(".plus");
	const minusIcon = button.querySelector(".minus");

	if(isExpanded) {
			plusIcon.classList.remove("hidden-icon");
			minusIcon.classList.add("hidden-icon");
	} else {
			plusIcon.classList.add("hidden-icon");
			minusIcon.classList.remove("hidden-icon");
	}
}
