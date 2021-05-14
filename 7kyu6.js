//Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.
sortme = function( names ){
 return names.sort();
}

//Write a function filterLongWords that takes a string sentence and an integer n. Return a list of all words that are longer than n.
function filterLongWords(sentence, n) {
  let result = [];
  let arr = sentence.split(' ');
    for(let i = 0; i < arr.length; i += 1){
      let word = arr[i].split('');
      if(word.length > n) result.push(arr[i]);
    } return result;
}
