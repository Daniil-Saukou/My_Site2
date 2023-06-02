let num1;
let num2;
function plus() {
	num1 = document.getElementById('number1').value;
	num2 = document.getElementById('number2').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	ans = num1 + num2;
	document.getElementById('result').innerHTML = ans;
};

buttonPlus.addEventListener("click", plus);