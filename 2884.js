var [hour, minute] = prompt("시간과 분을 입력하세요.").split(" ");

hour = parseInt(hour);
minute = parseInt(minute);

if(minute >= 45) minute -= 45;
else if(minute < 45){
    if(hour >= 1) hour--;
    else hour = 23;

    minute = 60 - (45 - minute);
}

console.log(hour + " " + minute);