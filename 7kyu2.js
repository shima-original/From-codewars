// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched. 
function switcheroo(x){
  let arr = x.split('');
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] == 'a') arr[i] = 'b';
    else if(arr[i] == 'b') arr[i] = 'a';
  }
    return arr.join('');
}

//Your task is to write a function that takes a string and return a new string with all vowels removed. Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
  let arr = str.split('');
  let result = arr.filter((elem) => elem != 'a' && elem != 'e' && elem != 'i' 
                         && elem != 'o' && elem != 'u' && elem != 'A'
                         && elem != 'E' && elem != 'I' && elem != 'O' && elem != 'U');
  return result.join('');
}

/* Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.*/
function pyramid(balls) {
  let x = 0;
  let n = 0;
  while( n < balls) {
    x += 1;
    n += (x + 1);
  }
  return x;
}

//Given a non-negative integer, return an array / a list of the individual digits in order.
function digitize(n) {
  let arr = n.toString().split('');
  let result = arr.map(Number);
  return result;
}

/* Traffic light. Complete the function that takes a string as an argument representing the current state of the light 
and returns a string representing the state the light should change to. */
function updateLight(current) {
  
  let result;
  
  switch(current) {
      case 'green':
        result = 'yellow';
        break;
      case 'yellow':
        result = 'red';
        break;
      case 'red':
        result = 'green';
        break;
  }
  return result;
}


/* Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second,
returning the "combined" summed array.*/
function addArrays(array1, array2) {
  let result = [];
  
  if(array1.length != array2.length) return error;
  
  for(let i = 0; i < array1.length; i += 1) {
    result.push(array1[i] + array2[i]);
  }
  
  return result;
}

/*You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
C.....m returns 'Escaped!' <-- more than three characters between
C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.  */
function catMouse(x){
  let start = 0;
  let end = 0;
  let result = '';
  let arr = x.split('');
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] == 'C') start = i;
    else if(arr[i] == 'm') end = i;
  }
  result = (end - start) <= 4 ? 'Caught!' : 'Escaped!';
  return result;
}

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.*/
function isIsogram(str){
  let result = [];
  let arr = str.toLowerCase().split('');
  for(let i = 0; i < arr.length; i += 1) {
    if(!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return arr.length == result.length;
}

/* The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
In this kata we will recreate that stunt... sort of. You will be given two strings: lamps and drone. 
lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. 
The drone always flies left to right, and always begins at the start of the row of lamps. 
Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
Return the resulting lamps string. See example tests for more clarity. */
function flyBy(lamps, drone){
  let arrLamps = lamps.split('');
  let arrDrone = drone.split('');
  let counter = 0;
  
  for (let i = 0; i < arrDrone.length; i += 1) {
    if(arrDrone[i] == '=') counter += 1;
    else if (arrDrone[i] == 'T') break;
  }
  
  for(let j = 0; j <= counter; j += 1) {
    if (arrLamps[j] == 'x') arrLamps[j] = 'o';
  }
  return arrLamps.join('');
}


