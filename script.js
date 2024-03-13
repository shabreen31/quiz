const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick=()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick=()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick=()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick=()=>{
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBin.classList.remove('active');

    questionCount=0;
    questionNumb=1;
     userScore=0;
     showQuestions(questionCount);
     questionCounter(questionNumb);
     headerScore();
}

goHomeBtn.onclick=()=>{
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBin.classList.remove('active');

    questionCount=0;
    questionNumb=1;
     userScore=0;
     showQuestions(questionsCount);
     questionCounter(questionNumb);
     headerScore();
}


let questionCount=0;
let questionNumb=1;
let userScore=0;

const nextBin=document.querySelector('.next-btn');

nextBin.onclick=()=>{
    if(questionCount<questions.length-1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBin.classList.remove('active');
    }
    else{
        showResultBox();
    }
}

const optionList=document.querySelector('.option-list');


function showQuestions(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}. ${questions[index].question}`;

    let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
    `;
    optionList.innerHTML=optionTag;

    const option=document.querySelectorAll('.option');
    for(let i=0;i<option.length;i++){
        option[i].setAttribute('onClick','optionSelected(this)')
    }
}

function optionSelected(answer){
      let useranswer=answer.textContent;
      let correctAnswer=questions[questionCount].answer;
      let allOptions=optionList.children.length;

      if(useranswer==correctAnswer){
          answer.classList.add('correct');
          userScore+=1;
          headerScore();
        }
        else{
            answer.classList.add('Incorrect');
            for(let i=0;i<allOptions;i++){
                if(optionList.children[i].textContent==correctAnswer){
                    optionList.children[i].setAttribute('class','option correct');
                }
            }
      }

      for(let i=0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled');
      }

      nextBin.classList.add('active');
}

function questionCounter(index){
    const questionTotal=document.querySelector('.question-total');
    questionTotal.textContent=`${index} of ${questions.length} Questions`;

}


function headerScore(){
    const headerScoreText=document.querySelector('.header-score');
    headerScoreText.textContent=`Score: ${userScore} / ${questions.length}`;
}

function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText=document.querySelector('.score-text');
    scoreText.textContent=`Your Score ${userScore} out of ${questions.length}`;
    
    const circularProgress=document.querySelector('.circular-progress');
    const progressValue=document.querySelector('.progress-value');
    let progressst=-1;
    let progressend=(userScore/questions.length)*100;
    let speed=20;

    let progress=setInterval(()=>{
        progressst++;
        progressValue.textContent=`${progressst}%`;
        circularProgress.style.background=`conic-gradient(#60b3e0 ${progressst *3.6}deg,rgb(10 34 52) 0deg)`
        if(progressst==progressend){
            clearInterval(progress);
        }
    },speed);


}
































