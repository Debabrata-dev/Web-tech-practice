let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector("#reset-btn");
let turnX=true;
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

const winPatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame=()=>{
    turnX=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnX){
        box.textContent="X";
        box.style.color="red";
        turnX=false;
    }
    else{
        box.textContent="0";
        turnX=true;
    }
    box.disabled=true;
    checkWinner();
  });
})


const disabledBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}

const enabledBoxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}


const showWinner =(winner)=>{
    msg.innerText=`Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPatters){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]],
        //             boxes[pattern[2]].innerText)
    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;  
   if(pos1val !="" && pos2val !="" && pos3val !="")
{
if(pos1val==pos2val && pos2val==pos3val)
{
    console.log("winner",pos1val);
    showWinner(pos1val);
}
}
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)


let currBack="Light";
let a1=document.querySelector('#btn-1');
let b1=document.querySelector('body');
let h1=document.querySelector('header')

a1.addEventListener('click',Playev);
function Playev(){

if(currBack=="Light"){
currBack="dark"
b1.style.cssText="background-color:black;color:white;transition:0.8s";
a1.style.cssText="background-color:white;color:black;transition:0.8s";
// h1.style.cssText="background:linear-gradient(to bottom left, white 50%, black 50%)"
//   h1.style.cssText="background:linear-gradient(to bottom left, black 50%, white 50%)"
}
else{
    currBack="Light"
    b1.style.cssText="background-color:#aadbf6;color:black;transition:0.8s"; 
    a1.style.cssText="background-color:#191913;color:white;transition:0.8s";
    
    // h1.style.cssText="background:linear-gradient(to bottom left, white 50%, black 50%)"
}
}