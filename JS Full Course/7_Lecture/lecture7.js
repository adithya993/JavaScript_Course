let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let cname = div.getAttribute("class");
console.log(cname);
div.setAttribute("class","div1 headersegment");
console.log(div);
div.style.backgroundColor = "chartreuse";

//create new element
let newBtn0 = document.createElement("Button");
newBtn0.innerText = "append btn";
div.append(newBtn0);//append at end of div

let newBtn1 = document.createElement("Button");
newBtn1.innerText = "prepend btn";
div.prepend(newBtn1);//append at start of div

let newBtn2 = document.createElement("Button");
newBtn2.innerText = "before btn";
div.before(newBtn2);//append before div beginning

let newBtn3 = document.createElement("Button");
newBtn3.innerText = "after btn";
div.after(newBtn3);//append after div ends

//HW - appendchild and removechild from MDN docs

//Practice:
let newpbtn = document.createElement('button');
newpbtn.innerText = "click me";
newpbtn.style.color = "white";
newpbtn.style.backgroundColor = "red";
document.querySelector('body').prepend(newpbtn);

document.querySelector("p").classList.add("changePClass");