let id=document.querySelector('#btn1');
let a=document.querySelector('body');
let CurMode="Light";
id.addEventListener('click',()=>{
  if(CurMode==="Light"){
    CurMode="dark";
    a.style.cssText="background-color:black;color:white;transition:0.8s";
  }
  else{
    CurMode="Light";
    a.style.cssText="background-color:white;color:black;transition:0.8s";
  
  }
})