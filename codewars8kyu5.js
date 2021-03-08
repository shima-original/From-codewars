/*In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position. */
function move (position, roll) {
  return (position + roll*2);
}


//Complete the solution so that it reverses the string passed into it. 
function solution(str){
  return str.split('').reverse().join('');
}

//Your task is to make two functions, max and min that take a array of integers list as input and outputs the largest and lowest number in that array/vector.
let min = function(list){
    list.sort((a,b) => a>b ? 1:-1);
    return list[0];
  };

let max = function(list){
  list.sort((a,b) => a<b ? 1:-1);
  return list[0];
};

//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
  return b.toString();
}

//Write a function that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
function feast(beast, dish) {
  let result = (beast.split('')[0] == dish.split('')[0] && beast.split('')[beast.length - 1] == dish.split('')[dish.length - 1]) ? true : false;
  return result;
}

//We need a function that can transform a number into a string.
function numberToString(num) {
  return num.toString();
}
