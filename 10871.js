var [N, X] = prompt("N, X 를 입력하세요.").split(" ");
var array = prompt("배열 A를 입력하세요.").split(" ");

var result = "";
X = parseInt(X);
for(var i=0;i<N;i++){
    if(array[i] < X) {
        result += array[i];
        result += " ";
    }
}

console.log(result);