let a = 5;
let b = 2;

//Arithmetic Operators -> +,-,/,*
console.log("a =",a," & b =",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);

//Modulus Operator -> %
console.log("a % b =",a % b);

//Exponentiation Operator -> ** 
console.log("a ** b =",a ** b);

//Unary Operators -> ++,--
console.log();
console.log("a =",a," & b =",b);
console.log("a++ = ", ++a);
console.log("b-- = ", --b);

//Assignment Operators - =,+=,-=,*=,/=,%=,**=
console.log();
console.log("a =",a," & b =",b);
console.log("a += ", a+=10);
console.log("a -= ", a-=10);
console.log("a *= ", a*=5);
console.log("a /= ", a/=5);
console.log("a **= ", a**=2);

//Comparison Operators -> ==, !=, ===, !==, >,<,>=,<=
console.log();
console.log("a =",a," & b =",b);
console.log("a == b", a == b);
console.log("a != b", a != b);

console.log();
let aa = 5;
let bb = 2;
let cc = "5";
console.log("aa =",aa," & bb =",bb,"cc =",cc);
console.log("aa == cc", aa == cc); //only value check
console.log("aa === cc", aa === cc);
console.log("aa !== cc", aa !== cc);

console.log("aa >= bb", aa >= bb);
console.log("aa <= bb", aa <= bb);

//Logical Operators -> &&, ||, !
let a3= 6;
let b3 = 5;
let cond1 = a3>b3;
let cond2 = a3===b3;
console.log();
console.log("a3 =",a3," & b3 =",b3);
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 && b3===5", cond1 && b3===5);
console.log("cond1 || cond2", cond1 || cond2);
console.log("a3<b3 || a3===b3", a3<b3 || a3===b3);
console.log("!a3<b3",!a3<b3);

//Conditional Statements
let age = 31;
if(age>=18){
    console.log(age,"You can vote");
}
if(age<18){
    console.log(age,"You cannot vote");
}

let num = 15;
if(num === 0){
    console.log(num+" --> Neither Even nor Odd");
} else if(num%2 === 0){
    console.log(num+" --> Even");
} else {
    console.log(num+" --> Odd");
}

//Ternary Operators
console.log(num < 10 ? "Small Size" : "Large Size");

//Practice
let inNumber = prompt("Enter a Number:");
if(inNumber === "0") {
    alert("Number is not a multiple of 5");
}
else if(inNumber%5!==0){
    alert("Number is not a multiple of 5");
} else {
    alert("Number is a multiple of 5");
}

let inScores = prompt("Enter a Score:");
if(inScores < 50) {
    alert("Grade F");
}
else if(inScores < 60){
    alert("Grade D");
}
else if(inScores < 70){
    alert("Grade C");
}
else if(inScores < 90){
    alert("Grade B");
} else {
    alert("Grade A");
}

