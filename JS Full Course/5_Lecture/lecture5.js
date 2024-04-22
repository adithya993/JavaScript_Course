function firstFunction(){
    console.log("First function being called");
}

firstFunction();

function secondFunction(love){
    console.log("I love",love);
}

secondFunction("food");

function printsumReturnMul(num1, num2){
    console.log(num1+num2);
    return num1*num2;
}

let answer = printsumReturnMul(3,4);
console.log(answer);

//Arrow Function
const arrowSum = (a, b) => {
    console.log(a+b);
};

const arrowMul = (num1,num2)=>{
    return num1*num2;
};

let mulanswer = arrowMul(5,5);
console.log(mulanswer);

const countVowel = (strInput) => {
    strInput = strInput.toLowerCase();
    let sum = 0;
    for (const iterator of strInput) {
        if(iterator ==='a'|| iterator ==='e'|| iterator ==='i'|| iterator ==='o'|| iterator ==='u'){
            sum++;
        }
    }
    return sum;
};

//ForEach Example
let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bengaluru"];
cities.forEach((eachCity, index, cities)=>{
    console.log(eachCity.toUpperCase(), index, cities);
});

let numsArray = [1,2,3,4,5,6,7,8,9,10];
numsArray.forEach((item)=>{
    console.log(item*item);
})

let print5TableUntil10 = (num) => {
    console.log(`${num}*5 = ${num*5}`);
}
numsArray.forEach(print5TableUntil10);

//Map Example
//to return the same multiplication as array
let result = numsArray.map((num) => {
    return num*5;
});
console.log(result);

//Filter Example
// to filter multiples of 3 only from above array
let resultFilter = numsArray.filter((nums) => {
    return nums%3===0;
})
console.log(resultFilter);

//Reduce Example
let resultReduce = numsArray.reduce((sum,element)=>{
    sum+=element;
    return sum;
})
console.log(resultReduce);

//get largest element:
let randArr = [4,5,1];
let resultLargest = randArr.reduce((prevElement,curElement)=>{
    return curElement>prevElement?curElement:prevElement;
});
console.log(resultLargest);

//Practice
//filter marks above 90
let marksArr = [87,93,64,99,86];
let resultMarksAbove90 = marksArr.filter((mark)=>{
    return mark>90;
});
console.log(resultMarksAbove90);

//
let userInput = prompt("Enter a number:");
let arrProb2 = [];
for(let i = 1; i <= userInput; ++i){
    arrProb2[i-1] = i;
}
console.log(arrProb2);
//sum all these values
let resultSumReduce = arrProb2.reduce((sum,element)=>{
    sum+=element;
    return sum;
})
console.log(resultSumReduce);
let resultMulReduce = arrProb2.reduce((mul,element)=>{
    mul*=element;
    return mul;
})
console.log(resultMulReduce);
