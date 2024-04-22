//For Loops
for(let i = 0; i <= 5; ++i){
    console.log(i,"Adithya");
}

let sum = 0;
for(let i = 0; sum < 20; ++i){
    sum += i;
    console.log(sum);
}

//While Loops
let i=1
while(i<=5){
    console.log("Amul icecream");
    i++;
}
//Do While Loops
let j = 20;
do{
    console.log("Kwality");
} while(j<10);

//for-of Loop - can be used for arrays and strings
let firstName = "Adithya";
for (const char of firstName) {
    console.log(char);
}

//for-in Loop - can be used for objects
let student = {
    name:"Adithya",
    age:30,
    cgpa:3.67,
    isPass: true
};

for (const id in student) {
    if (student.hasOwnProperty.call(student, id)) {
        const element = student[id];
        console.log("Element->", element);
    }
    console.log("Main-> key="+id+" value="+student[id]);
}

//Practice:
for(let start = 0; start<=100;start+=2){
    console.log(start);
}

//Strings
let fullName = "Adithya Rengarajan";
let id = 9;
console.log(fullName.id);
console.log(fullName[id]);

//Template Literals
//Embedding expressions inside a placeholder in a part of string during runtime is called String Interpolation
let sentence = `The following student ${student.name}, is of age ${student.age}. The student has secured a CGPA of ${student.cgpa} and overall semester status is ${student.isPass}`;
console.log(sentence);



//String operations

//str.toUpperCase()
let th = "abcdefghijklmnopqrstuvwxyz";
console.log(th.toUpperCase());

//str.trim
let th0 = "    hello adithya    ";
console.log(th0.trim());

//str.slice
let th1 = "0123456789";
console.log(th1.slice(3));

//str.replace
let th2 = "0123456456789";
console.log(th2.replace("456","654"));

//str.replaceAll
let th2_1 = "0123456456789";
console.log(th2.replaceAll("456","654"));

//str.concat
let th3_1 = "Good";
let th3_2 = " Morning";
console.log(th3_1.concat(th3_2));

//str.charAt
let th4 = "Aufwedersehen";
console.log(th4.charAt(3));

//Practice
let enterFullName = prompt("Enter your full name:").trim();
let username = "".concat("@",enterFullName,enterFullName.length);
console.log("Username after mod:",username);