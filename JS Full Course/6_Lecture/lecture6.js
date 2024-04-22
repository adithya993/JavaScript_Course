console.log("hello!");//print html's element object
window.console.log("hello!");//both are same, window is global and created by browser
window.alert("adithya");
console.dir(window.document);//print the object of window, which is part of window
document.body.style.background = "green";
document.body.childNodes[3].innerText = "Adithya";

//DOM Manipulation:
//Selecting with Id:
let h1Value = document.getElementById('heading0').innerText;
console.log(h1Value);

//Selecting with Classname
let headingsWithSameClass = document.getElementsByClassName('bkgClr');
console.dir(headingsWithSameClass);
console.log(headingsWithSameClass);

//Selecting with Tagname
let elementsWhichAreParagraphs = document.getElementsByTagName("p");
console.dir(elementsWhichAreParagraphs);

//Selecting with Query Selector
let firstPElements = document.querySelector("p");//compares id, classname, tagname and returns 1st found element
console.dir(firstPElements);

let allPElements = document.querySelectorAll("p");//compares id, classname, tagname and returns 1st found element
console.dir(allPElements);

let firstCElements = document.querySelector(".bkgClr");//compares id, classname, tagname and returns 1st found element
console.dir(firstCElements);

let allCElements = document.querySelectorAll(".bkgClr");//compares id, classname, tagname and returns 1st found element
console.dir(allCElements);

let firstIdElement = document.querySelector("#heading0");//compares id, classname, tagname and returns 1st found element
console.dir(firstIdElement);
console.dir(firstIdElement.tagName);
//console.dir(firstIdElement.);

console.dir(document.body.firstChild);

let firstDivIdElement = document.querySelector("#div1");
console.dir(firstDivIdElement.innerText);
console.dir(firstDivIdElement.textContent);//this prints also the hidden elements

//Practice:
//append a string in h2 element
let h2Element = document.querySelector("h2");
h2Element.innerText += " from Adithya Rengarajan";
//access div and add unique
let boxDivs = document.querySelectorAll(".box");
boxDivs.forEach((element,itr) => {
    element.innerText+="Div"+itr;
});