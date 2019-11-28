var input = prompt("N을 입력하세요.");

for(var i = 1;i <= input;i++){
    var star = "";
    for(var j=0;j<i;j++){
        star += "*";
    }
    console.log(star);
}