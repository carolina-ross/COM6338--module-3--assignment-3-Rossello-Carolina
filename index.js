// Your code here
var questionsArr = [
    {
    question: 'The Big Apple is a nickname given to San Francisco',  //0
    answer: false
    },

    {
    question: 'Penguins cannot fly',  //1
    answer: true
    },

    {
    question: 'There are more ancient pyramids in Sudan than in Egypt',  //2
    answer: true
    },

    {
    question: 'Ethereum is the second-largest cryptocurrency after Bitcoin',  //3
    answer: true
    },

    {
    question: 'There are three rivers in Saudi Arabia',  //4
    answer: false
    }
]

function runQuiz() {
    var score = 0

    for(var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);

        if(userAnswer === questionsArr[i].answer) {
           score++;
        }
      } 
      var scoreTest = Math.round((userAnswer / questionsArr.length) * 100)
      alert("Your score is " + scoreTest + "%")    
}

