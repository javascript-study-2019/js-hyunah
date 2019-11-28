var input = prompt("N을 입력하세요.");

for(var i = 1;i <= input;i++){
    var star = "";
    for(var j = input - i - 1;j >= 0;j--){
        star += " ";
    }
    for(var j=1;j <= i;j++){
        star += "*";
    }
    console.log(star);
}