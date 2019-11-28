
var length = 10;
var result = "";

for (var i=0; i<length; i++){
	for(var j = length - i; j > 0;j--){
		result += "*";
	}
	for(var j = 0;j<i;j++){
		result += " ";
	}

	for(var j=0;j<i-1;j++){
		result += " ";
	}
	for(var j=(length -i); j>0; j--){
		if(i==0 && j== length -i) continue;
		result += "*";
	}
	if(i == length-1) break; 
	result += "\n";
}

for (var i=0;i<length; i++){
	for(var j=0;j<i;j++){
		result += "*";
	}
	for(var j=length -i;j>1;j--){
		result += " ";
	}

	for(var j=i;j<length;j++){
		result += " ";
	}
	for(var j=0;j<i;j++){
		result += "*";
	}

	result += "\n";
}

console.log(result);