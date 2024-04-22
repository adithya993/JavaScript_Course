let btn1 = document.querySelector("#btn1");
btn1.onclick = (event) => {
    console.log("Button 1 was clicked");
    console.log(event.type);
    console.log(event.target);
}

let div1 = document.querySelector("#div1");
div1.onmouseover = () => {
    console.log("you are inside div1");
}

const handler2 = ()=>{
    console.log("Div2 was clicked duplicate");
}

let div2 = document.querySelector("#div2");
div2.addEventListener("click",()=>{
    console.log("Div2 was clicked");
})
div2.addEventListener("click",handler2);
div2.removeEventListener("click",handler2);

let mode = "light";
const toggleColor = (event) => {
    if(mode == "light"){
        mode = "dark";
        console.log("dark");
        document.querySelector("#prac1").style.backgroundColor = "black";
        document.querySelector("#prac1").classList.remove("prac1dark");
        document.querySelector("#prac1").classList.add("prac1light");
    } else {
        mode = "light";
        console.log("light");
        document.querySelector("#prac1").style.backgroundColor = "white";
        document.querySelector("#prac1").classList.remove("prac1light");document.querySelector("#prac1").classList.add("prac1dark");
    }
}
document.querySelector("#prac1").addEventListener("click",toggleColor);