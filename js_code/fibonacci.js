/*
n이라는 입력값이 주어졋을때 n번째 피보나치 수를 출력. n<20
*/

function fibonacci(num) {
	var result = 0;

	if(num <= 1){
		return num;
	}	
	else if(num > 1){
		result = fibonacci(num - 1) + fibonacci(num - 2);
	}
	return result;
}

var input = prompt("몇번째 피보나치 수를 출력할까요?", "숫자를 입력하세요");
var result = fibonacci(input);

alert(result);
