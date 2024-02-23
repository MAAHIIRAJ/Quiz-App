var quiz = [
  {
    question : 'Who inveted Java Programing?',
    
     opt1:'Dennis Ritches',
      opt2:'Guido van Rossum',
      opt3:'Bjarne Stroustrup',
      opt4: 'James Gosling',

    correctAns: 'James Gosling',
  },

  {
    question : "Java is case sensitive?",
   
    opt1: 'True',
    opt2: 'False',
    opt3: 'May be true or false',
    opt4: 'Depends on Compiler',
    
    correctAns : 'True',
  },

  {
    question : "Java was publicly released in ______?",
    
    opt1: '26-05-1995',
    opt2: '27-05-1995',
    opt3: '29-05-1997',
    opt4: '30-03-1998',

    correctAns: '27-05-1995',
  }

];

var question = document.getElementById('quiz-box')
console.log(question);
console.log(question.textContent)
var option_A = document.getElementById('text-option_A')
var option_B = document.getElementById('text-option_B')
var option_C = document.getElementById('text-option_C')
var option_D = document.getElementById('text-option_D')
var answerElement = document.querySelectorAll('.answer')
console.log(option_A),
console.log(option_B),
console.log(option_C),
console.log(option_D)
console.log(option_A.textContent);
console.log(option_B.textContent);
console.log(option_C.textContent);
console.log(option_D.textContent);

var Next = document.getElementById('Next');

var currentquestion =0;
var score =0;
console.log(quiz[currentquestion].question);
console.log(quiz[currentquestion].opt1);
console.log(quiz[currentquestion].opt2);
console.log(quiz[currentquestion].opt3);
console.log(quiz[currentquestion].opt4);


question.textContent = quiz[currentquestion]. question;
option_A.textContent = quiz[currentquestion].opt1;
option_B.textContent = quiz[currentquestion].opt2;
option_C.textContent = quiz[currentquestion].opt3;
option_D.textContent = quiz[currentquestion].opt4;

Next.addEventListener('click',()=>{
  var checkedans = document.querySelector('input[type="radio"]:checked');
  console.log(checkedans)

  if(checkedans === null){
  alert("please select one option!");
  }else{
    if(checkedans.nextElementSibling.textContent===quiz[currentquestion].correctAns){
      score++;
    }

currentquestion++;
if(currentquestion<quiz.length){
  question.textContent = quiz[currentquestion]. question;
option_A.textContent = quiz[currentquestion].opt1;
option_B.textContent = quiz[currentquestion].opt2;
option_C.textContent = quiz[currentquestion].opt3;
option_D.textContent = quiz[currentquestion].opt4;
checkedans.checked= false;
}else{
alert('Your score is'+ score + 'out of' + quiz.length);
location.reload();  
}


  }
})

var Next = document.getElementById('btn');
function startAgain() {
  // Reload the page
  location.reload();
}