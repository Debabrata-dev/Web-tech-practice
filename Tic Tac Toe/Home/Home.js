let a1=document.querySelector('#mod');
let curColor="light";
let a2=document.querySelector('body');
a1.addEventListener("click",ModeChange);

function ModeChange(){
    if(curColor==="light"){
        curColor="Dark";
      a2.style.cssText="background-color:rgb(11, 0, 46);transition:0.8s";
    }
    else{
        curColor="light";
        a2.style.cssText="background-color:white;transition:0.8s"; 
    }
}