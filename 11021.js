var input = prompt("테스트 케이스의 개수 T를 입력하세요.");

for(var i=1;i <= input; i++){
    var [A, B] = prompt("A와 B를 공백으로 구분하여 입력하세요.").split(" ");
    var result = parseInt(A) + parseInt(B);
    console.log("Case #" + i + ": " + result);
}