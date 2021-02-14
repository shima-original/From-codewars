/*The code provided is supposed replace all the dots . in the specified String str with dashes -   */

var replaceDots = function(str) {
  let arr = str.split('.');
  let result = arr.join('-');
  return result;
}


/*  For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.  */

const quarterOf = (month) => {
  if (month === 1 || month === 2 || month === 3) return 1;
  else if (month === 4 || month === 5 || month === 6) return 2;
  else if (month === 7 || month === 8 || month === 9) return 3;
  else return 4; 
}

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.  */

function invert(array) {
  for(let i = 0; i < array.length; i += 1) {
    array[i] = -(array[i]);
  }
  return array;
}

// Complete the function that receives as input a string, and produces outputs according to the following table

function getDrinkByProfession(param){
  let input = param.toLowerCase();
  
  switch(input) {
    case 'jabroni':
        return 'Patron Tequila';
        break;
    case 'school counselor':
        return 'Anything with Alcohol';
        break;
    case 'programmer':
        return 'Hipster Craft Beer';
        break;
    case 'bike gang member':
        return 'Moonshine';
        break;
    case 'politician':
        return 'Your tax dollars';
        break;
    case 'rapper':
        return 'Cristal';
        break;
    default:
        return 'Beer';
        break;
  }
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return (num > 0) ? -num : num;
}
