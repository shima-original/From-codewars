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
