var input = prompt("0보다 크거나 같고, 99보다 작거나 같은 정수를 입력하세요.");
var result = input, num = 0;

do{
    var array = result.split("");

    //if input number has single digit
    if(array.length == 1){
        result = array[0] + array[0];
    }
    //if input number has two digits
    else{
        var tmp = String(parseInt(array[0]) + parseInt(array[1]));
        
        //if tmp has one digit
        if(tmp.length == 1){
            result = array[1] + tmp[0];
        }
        //if tmp has two digits
        else result = array[1] + tmp[1];
    }
    num++;
}
while(parseInt(result) != parseInt(input))
console.log(num);