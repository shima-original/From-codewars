/* You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
and then return the first value. The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array. */
function twoSort(s) {
  s.sort();
  let arrSymbols = s[0].split('');
  return arrSymbols.join('***');
}

/* Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', 
else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
X will be either a number or a string. Both are valid. */
function apple(x){
  return result = (Math.pow(+(x), 2) > 1000) ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

/* Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
The number of dogs will always be a number and there will always be at least 1 dog. */
function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
  
  return respond;
}
