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
    list.sort((a,b) => a>b ? b:a);
    return list[0];
  };

let max = function(list){
  list.sort((a,b) => a<b ? b:a);
  return list[0];
};
