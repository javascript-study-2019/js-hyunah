var input = prompt("테스트케이스의 개수 T를 입력하세요.");

while(input--){
    var [A, B] = prompt("A와 B를 입력하세요.").split(" ");
    console.log(parseInt(A) + parseInt(B));
}