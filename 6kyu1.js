/* We search non-negative integer numbers, with at most 3 digits, such as the sum of the cubes of their digits is the number itself; we will call them "cubic" numbers.
These "cubic" numbers of at most 3 digits are "hidden" with other numbers and characters in a string.
The task is to find, or not, the "cubic" numbers in the string and then to make the sum of these "cubic" numbers found in the string, if any, and to return a string.
 if "cubic" numbers number1, number2, ... were found.
The numbers in the output are to be in the order in which they are encountered in the input string.
If no cubic numbers are found return the string: `"Unlucky"``. */
function isSumOfCubes(s){
  let sum = 0;
  let result = [];
  let matches = s.match(/\d{1,3}/);
  for(let i = 0; i < matches.length; i += 1){
    sum += matches[i] ** 3;
    if(sum === matches[i]) result.push(matches[i]);
  }
  if(result.length === 0) result.push("Unlucky");
  else {
    result.push("Lucky");
  } return result.join(" ");
}

