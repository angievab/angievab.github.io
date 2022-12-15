// Set the questions
const quiz = new Map([
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonderwoman's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
  ]);

 // initialize score
let score = 0;

for(const [question,answer] of quiz.entries()){

  // get answer from user
  const response = prompt(question);
  // check if answer is correct
  if(response === answer){
    alert('Correct!');
    // increase score by 1
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`);
  }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
