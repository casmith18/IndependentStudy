let correct = 0;

let rank;

const main = document.querySelector('main');

const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1;
}
const answer2 = prompt("Name a programming language that's also a snake.");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct += 1;
}
const answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1;
}
const answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
  correct += 1;
}
const answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
  correct += 1;
}

/*
  5 correct = Gold
  3-4 correct = Silver
  1-2 correct = Bronze
  0 correct = No crown
*/

if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver";
} else if ( correct >= 1 ) {
  rank = "Bronze";
} else {
  rank = "None :(";
}

main.innerHTML = `
  <h2>You got ${correct} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>
`;
