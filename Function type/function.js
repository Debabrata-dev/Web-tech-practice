//anomyous function
// function(){
//     for(let i=0;i<50;i++){
//         if(i%2!=0){
//             console.log("the odd id:"+i);
//         }
//     }
// } 


//function with Expression
// let oddnum=function(){
//     for(let i=0;i<50;i++){
//         if(i%2!=0){
//             console.log("the odd id:"+i);
//         }
//     }
// }
// oddnum();
// console.log(typeof oddnum);

//Imediately Invovled Function Expression
// (function(a,b){
//     for(let i=0;i<50;i++){
//       if(i%2!=0){
//         console.log("the odd is"+i);
//       }
//       console.log(a+b);
//     }
// })(10,20)

//Function in javascript 
function add(a,b){
    return a+b;
}
function mult(c,d){
    return c*d;
}
function operation(funName ,x,y){
return funName(x,y);
}
let total=operation(add,11,20);
console.log(total);
//multipl
let multipli=operation(mult,10,20);
console.log(multipli);

