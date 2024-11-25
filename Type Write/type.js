const words='Hello Debabrata Das Hello How Are You i Think Your Are Fine But You are Not You Are FIne But You Are Not Good Because You Are Not Studey Form 4 Days '.split(" ");
const wordCount=words.length;
function randomWord(){
    const randomIndex=Math.ceil(Math.random()*wordCount);
    return words[randomIndex];
}

function formatWord(word){
    return `<div class="word"><span class="letter">${word.split('').join('</span><span clas="letter">')}</span></div>`;
}


function newGame(){
    document.getElementById('words').innerHTML = '';
    for(let i=0;i<200;i++){
     document.getElementById('words').innerHTML+=formatWord(randomWord());
    }
}
newGame();
