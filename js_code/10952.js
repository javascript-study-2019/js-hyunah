var [A, B] = prompt("A, B를 입력하세요.").split(" ");

while(A != 0 && B != 0){
    console.log(parseInt(A) + parseInt(B));
    var [A, B] = prompt("A, B를 입력하세요.").split(" ");
}