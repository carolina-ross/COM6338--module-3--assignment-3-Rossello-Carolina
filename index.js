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
    var numOfCorrect = 0

    for(var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        var answer = confirm(question);

        numOfCorrect += questionsArr[i][1];
        var scoreTest = Math.round((answer/questionsArr.length) * 100);          
      } 
      alert("Your score is" + scoreTest)
    }

