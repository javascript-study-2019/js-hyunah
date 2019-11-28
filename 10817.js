var input = prompt("세 정수 A, B, C를 공백으로 구분하여 입력하세요.").split(" ");

/*
input.sort();
이렇게 사용하면 ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음.
*/
input.sort(function(a, b){
    return a-b;
})

console.log(input[1]);