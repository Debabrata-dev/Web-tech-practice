let modeBtn=document.querySelector('#mode');
let currMode="Light";//dark
let body=document.querySelector("body");
// modeBtn.addEventListener("click",()=>{
// if(currMode==="Light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
// }
// else{
//     currMode="Light";
//     document.querySelector("body").style.backgroundColor="white";
// }
// })

modeBtn.addEventListener("click",()=>{
    if(currMode==="Light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    })