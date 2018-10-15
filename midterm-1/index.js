var userName = document.getElementById('user-name');
var email = document.getElementById('email');
var telNumber = document.getElementById('telnumber');
var pass = document.getElementById('pass');
var passEight = document.getElementById('pass');
var passConfirm = document.getElementById('passconfirm');
var button=document.getElementById("submit");
button.addEventListener("click",function(event) {

	// console.log(userName, email)
	event.preventDefault();
	console.log(userName);
	var hasError = false;
	document.getElementById('user-name-error').innerHTML = "";
	if(userName.value.length<1) {
		var error = document.getElementById('user-name-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Вы не ввели логин!";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}
	console.log(email);
	document.getElementById('email-error').innerHTML = "";
	if(email.value.length<1) {
		var error = document.getElementById('email-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Вы не ввели email!";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}
	var substring = '@';
	if(email.value.toString().indexOf(substring) == -1) {
		var error = document.getElementById('email-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Email должен содержать @ !";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}

	console.log(telNumber);
	document.getElementById('number-error').innerHTML = "";
	if(telNumber.value.length<1) {
		var error = document.getElementById('number-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Вы не ввели номер";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}
	if((telNumber.value[0]!='+') || (telNumber.value[1]!=7)) {
		var error = document.getElementById('number-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Номер должен начинаться с +7";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}

	console.log(passEight);
	document.getElementById('pass-error').innerHTML = "";
	if(pass.value.length<8) {
		var error = document.getElementById('pass-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Пароль слишком короткий! (мин. 8 символов)";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}

	console.log(passConfirm);
	document.getElementById('passconfirm-error').innerHTML = "";
	if(pass.value!=passconfirm.value) {
		var error = document.getElementById('passconfirm-error');
		var errorText = document.createElement("p");
		errorText.textContent = "Пароли не совпадают!";
		errorText.style.color = "white";
		error.appendChild(errorText);
		hasError = true;
	}

	document.getElementById('success').innerHTML = "";
	if(!hasError) {
		var success = document.getElementById('success');
		var successText = document.createElement("p");
		successText.textContent = "Вы успешно зарегистрировались!";
		successText.style.color = "white";
		success.appendChild(successText);
		localStorage.setItem('userName', userName.value.toString());
		localStorage.setItem('e-mail', email.value.toString());
		localStorage.setItem('userPassword', passEight.value.toString());
		window.open("signin.html", "_self")
	}

});