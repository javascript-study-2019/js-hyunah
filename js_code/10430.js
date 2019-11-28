var [A, B, C] = prompt("세 숫자를 공백으로 구분하여 입력하세요.").split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

console.log((A + B) % C);
console.log(((A%C) + (B%C)) % C);
console.log((A*B) % C);
console.log((A%C * B%C) % C);