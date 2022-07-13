const form = document.querySelector("form");
const inputFirst = form.querySelector(".firstName");
const inputSecond = form.querySelector(".lastName");
const inputEmail = form.querySelector(".mail");
const inputPassword = form.querySelector(".pass");
const btn = document.querySelector(".button");
const firstError = form.querySelector(".fError");
const lastError = form.querySelector(".lError");
const emailError = form.querySelector(".eError");
const passwordError = form.querySelector(".pError");

form.addEventListener("submit", checkInputs);

function checkInputs(e) {
	let validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	if (inputFirst.value === "" || inputFirst.value == null) {
		inputFirst.classList.add("validinput");
		firstError.innerText = "First Name cannot be empty";
		e.preventDefault();
	} else if (inputFirst.value === inputFirst.value) {
		inputFirst.classList.remove("validinput");
		firstError.innerText = "";
	}
	if (inputSecond.value === "" || inputSecond.value == null) {
		inputSecond.classList.add("validinput");
		lastError.innerText = "Last Name cannot be empty";
		e.preventDefault();
	} else if (inputSecond.value === inputSecond.value) {
		inputSecond.classList.remove("validinput");
		lastError.innerText = "";
	}
	if (inputEmail.value === "" || inputEmail.value == null) {
		inputEmail.classList.add("validinput");
		emailError.innerText = "Email cannot be empty";
		e.preventDefault();
	}
	if (inputPassword.value === "" || inputPassword.value == null) {
		inputPassword.classList.add("validinput");
		passwordError.innerText = "Password cannot be empty";
	} else if (inputPassword.value.length < 8) {
		inputPassword.classList.add("validinput");
		passwordError.innerText =
			"Password length must be atleast 8 characters";
	} else if (inputPassword.value === inputPassword.value) {
		inputPassword.classList.remove("validinput");
		passwordError.innerText = "";
	}

	//valid regex
	if (inputEmail.value.match(validRegex)) {
		return true;
	} else {
		inputEmail.placeholder = "email@example/com";
		inputEmail.classList.add("validinput");
		emailError.innerText = "Looks like this is not email";
		return false;
	}
}
