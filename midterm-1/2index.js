// Sign-in page
var email1 = document.getElementById('email1');
var pass1 = document.getElementById('pass1');
var button1 = document.getElementById('login');
console.log(button1);
button1.addEventListener("click",function(event)
{
	// event.preventDefault();
	console.log(button1);

	if ((localStorage.getItem('e-mail') == email1.value.toString()) && (localStorage.getItem('userPassword') == pass1.value.toString())) {
		window.open("main.html", "_self");
	} 
	else {
		var error1 = document.getElementById('success1');
		var errorText1 = document.createElement("spans");
		errorText1.textContent = "Такого пользователя не существует!";
		errorText1.style.color = "white";
		error1.appendChild(errorText1);
	}
});