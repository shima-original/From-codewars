
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


//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3)/3;
  let result;
      if(90<=score && score<=100) result = "A";
      else if(80<=score && score<90) result = "B";
      else if(70<=score && score<80) result = "C";
      else if(60<=score && score<70) result = "D";
      else {
        result = "F";
      }
  return result;
}
