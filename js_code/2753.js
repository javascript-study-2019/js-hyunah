var input = parseInt(prompt("연도를 입력하세요."));

if(!(input % 4)){
    if(input % 100) console.log("1");
    else console.log("0");
}
else if(!(input % 400)) console.log("1");
else console.log("0");