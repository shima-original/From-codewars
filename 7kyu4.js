/* There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. 
Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):
    Weekday
    Number of trees that must be sprayed on that day
    Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.
Let cost of all liquid be x
Your function should return string like this : 'It is (weekday) today, (name), you have to work, 
you must spray (number) trees and you need (x) dollars to buy liquid' */
function task(w, n, c) {
  let worker = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William'
  };
  let man = worker[`${w}`];
  let x = n*c;
  return `It is ${w} today, ${man}, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
}

//Yor task is to write function factorial
function factorial(n){
  let counter = 1;
  let arr = new Array(n);
  for(let i = n; i > 0; i -= 1) {
    counter *= i;
  } return counter;
}

/*Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
function getCount(str) {
  let vowelsCount = 0;
  let arrAll = str.split('');
  let arrVowels = ['a', 'e', 'i', 'o', 'u'];
  
  for(let i = 0; i < arrVowels.length; i += 1){
    for(let j = 0; j < arrAll.length; j += 1){
      if(arrVowels[i] == arrAll[j]) vowelsCount += 1;
    }
  }
  return vowelsCount;
}

// Write a function which maps a function over the lists in a list. 
function gridMap(fn,a) {
 return a.map(elem => elem.map(fn));
}

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters). 
function vowelIndices(word){
  let arrWord = word.split('');
  let result = [];
  let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];
  for(let i = 0; i < arrWord.length; i += 1){
    for(let j = 0; j < vowels.length; j += 1){
      if(arrWord[i] == vowels[j]){
        result.push(i+1);
      }
    }
  } return result;
}

/*Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. 
Given a string, check if it is cool.*/
function coolString(s) {
  let arr = s.split('');
  let up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
           'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(let i = 0; i < arr.length; i += 1){
    if (up.includes(arr[i]) && up.includes(arr[i + 1]) || low.includes(arr[i]) && low.includes(arr[i + 1])){
      return false;
    }
    else if((!up.includes(arr[i])) && (!low.includes(arr[i]))) {
      return false;
    }
  } return true;
}
