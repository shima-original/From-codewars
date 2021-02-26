
//Make a simple function called greet that returns the most-famous "hello world!".
function greet() {
  return "hello world!";
}

/*Finish the uefaEuro2016() function so it return string just like in the examples below: 
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"*/
function uefaEuro2016(teams, scores){
  if (scores[0] > scores[1]) {
     return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` 
  }
  else if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` 
  }
  else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.` 
  }
}

//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

