var [A, B] = prompt("A와 B를 공백으로 구분하여 입력하세요.").split(" ");

A = parseInt(A);
B = parseInt(B);

if(A > B) console.log(">");
else if(A < B) console.log("<");
else console.log("==");