let id1=document.querySelector('#btn');
let body=document.querySelector('body');
id1.style.cssText="padding:8px;border:none;border-radius:5px;"
let curBack="Light"
id1.addEventListener("click",Change);


function Change(){
if(curBack==="Light"){
    curBack="Dark";
    body.style.cssText="background-color:black;color:white;transition:0.8s";
    a1.textContent="Dark Mode";
    // body.classList.remove("light");
}
else{
    curBack="Light";
    body.style.cssText="background-color:white;color:black;transition:0.8s";
    a1.textContent="Light Mode";
    // body.classList.remove("Dark");
}}


let a1=document.querySelector("#title");


