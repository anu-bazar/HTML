const quizForm = document.querySelector('#quiz-form');
const submitButton = document.querySelector('#submit-button');

//loop through radio buttons, return value if checked
function getSelectedAnswer(questionName) {
const radioButtons = document.getElementsByName(questionName);
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }

  
  return null;
}

//add event listener to submit button, return the value of the checked answer for each question
submitButton.addEventListener('click', () => {

  const answers = [
    getSelectedAnswer('question1'),
    getSelectedAnswer('question2'),
    getSelectedAnswer('question3'),
    getSelectedAnswer('question4')
  ];

  //count the number of each occurence values occurence in our answers list 
  let counts = {};

  for (let i = 0; i < answers.length; i++) {
    let value = answers[i];
    if (value in counts) {
      counts[value]++;
    } else {
      counts[value] = 1;
    }
  }
  //set the inner HTML with the values and the number of their occurences
  let myElement = document.getElementById("result");
  myElement.innerHTML="";

  for (let value in counts) {
    myElement.innerHTML += value + ' ' + counts[value] + '<br>';
  }
});