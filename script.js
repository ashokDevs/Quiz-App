const QUESTIONS=[
    {

        id:1,
        question:"What is 2+2?",
        crtAnswer:"4",
        Option1:"4",
        Option2:"7",
        Option3:"2",
        Option4:"1",


     
    },{
        id:2,
        question:"What is 3+3?",
        crtAnswer:"6",
        Option1:"90",
        Option2:"6",
        
        Option3:"4",
        Option4:"1",

    },{
        id:3,
        question:"What is 7+9?",
        crtAnswer:"16",
        Option1:"80",
        Option2:"15",
        Option3:"16",
        Option4:"19",
    },{
        id:4,
        question:"What is 9+9?",
        crtAnswer:"18",
        Option1:30,
        Option2:05,
        Option3:18,
        Option4:19,
    }
] 

const Options=document.querySelectorAll(".options");
const body=document.querySelector("body");
const questona=document.querySelector("#question")
const Option1a=document.querySelector("#option1");
const Option2a=document.querySelector("#option2");
const Option3a=document.querySelector("#option3");
const Option4a=document.querySelector("#option4");
const score=document.querySelector("#score");
const end=document.querySelector("#end");
const reset=document.querySelector("#reset");
const mainContainer=document.querySelector(".mainContainer");
let i=1;
let n=0;
let scoreChange=0;
let a=0;
Options.forEach( function (element) {
        element.addEventListener("click", (element)=> {
            checkAnswer(element.target);
            const Mytimeout1=setTimeout(QuestionChange,1000);
            Score();
            EndQuiz();
           const Mytimeout2= setTimeout(Reset, 1000);
        } ,{once:false});
    })

window.addEventListener("DOMContentLoaded", ()=>{
        Option1a.innerHTML=QUESTIONS[0].Option1;
        Option2a.innerHTML=QUESTIONS[0].Option2;
        Option3a.innerHTML=QUESTIONS[0].Option3;
        Option4a.innerHTML=QUESTIONS[0].Option4;
        questona.innerHTML=QUESTIONS[0].question;
})   
reset.addEventListener("click", ()=> {
    location.reload();
}) 
function QuestionChange(){
    
    while(i<QUESTIONS.length+1){
        
        Option1a.innerHTML=QUESTIONS[i].Option1;
        Option2a.innerHTML=QUESTIONS[i].Option2;
        Option3a.innerHTML=QUESTIONS[i].Option3;
        Option4a.innerHTML=QUESTIONS[i].Option4;
        questona.innerHTML=QUESTIONS[i].question;
        a++;
        break;
        
  }
  i++;
  
}
function checkAnswer(item){
    while(n<Options.length+10){
        if(item.innerHTML==QUESTIONS[n].crtAnswer){
            item.style.backgroundColor="green";
            body.style.backgroundColor="lightgreen"
        } else{
            item.style.backgroundColor="red";
            body.style.backgroundColor="yellow"
    
        }
        break;
    }
    n++;
    
   
}

function Reset(){
    body.style.backgroundColor="white";
    Option1a.style.backgroundColor="white"
    Option2a.style.backgroundColor="white"
    Option3a.style.backgroundColor="white"
    Option4a.style.backgroundColor="white"
}

function Score(){
    if(body.style.backgroundColor=="lightgreen"){
        
        scoreChange++;
        score.innerHTML=`Score: ${scoreChange}`;
    }
}

function EndQuiz(){
    if(n==Options.length+3){
        function ShowUP(){
            end.style.visibility="visible";
            reset.style.visibility="visible";
            end.innerHTML=`Game over <br> Your Score : ${scoreChange}`;
        }
        setTimeout(ShowUP, 500)
        mainContainer.style.visibility="hidden";
        
        body.style.backgroundColor="black";
        clearTimeout(Mytimeout2);
        clearTimeout(Mytimeout1);
        
        
    }
}

