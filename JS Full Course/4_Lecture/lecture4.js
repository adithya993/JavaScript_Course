let marks = [97,82,75,64,36];
console.log(marks);

let sum = 0;
for(let indvMark of marks){
    sum+=indvMark;
}
console.log(sum/marks.length);

let superheroes = ["Ironman","Superman","Shaktiman","Thor","Hulk","Captain America"];

for(let element of superheroes){
    console.log(element);
}

//Practice
let items = [250,645,300,900,50];
console.log(items);
for(let indvItem  = 0; indvItem < items.length; ++indvItem){
    items[indvItem] *= 0.9;
}
console.log(items);

//Array methods

//Push()
items.push(5000);
console.log(items);
//Pop()
items.pop();
console.log(items);
//toString()
console.log(superheroes.toString());
//concat()
console.log(marks.concat(items));
console.log(marks);
//unshift()helps in adding elements at start
console.log(superheroes);
console.log(superheroes.unshift("Chota Bheem"));
console.log(superheroes);
//shift() helps in removing elements at start
console.log(superheroes.shift());
console.log(superheroes);
//slice() return a sub array from index and doesnt change org array
console.log(superheroes.slice(3,5));
console.log(superheroes);
//splice() changes the org array for add,remove,replace
console.log("Splice example:",marks);
marks.splice(1,3)
console.log("Final array:",marks);
marks.splice(0,0,10,40,70);
console.log("New Final array:",marks);

//Practice
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);