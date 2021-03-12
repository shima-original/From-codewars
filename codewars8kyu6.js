/*Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1.
A string with size 6 should return :'101010'. With size 4 should return : '1010'.With size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.  */
function stringy(size) {
  let arr = [];
  arr.length = size;
  
  if(size % 2 == 0){
    for(let i = 0; i < arr.length; i += 2){
      arr[i] = 1;
      arr[i+1] = 0;
    } 
  }
  else {
    for(let i = 0; i < arr.length -2; i += 2){
      arr[i] = 1;
      arr[i+1] = 0;
      arr[i+2] = 1;
    }  
  }

  result = arr.join('');
  return result;
}

/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */
var Ball = function(ballType) {
  
  if (!ballType){
    this.ballType = "regular";
  } else {
    this.ballType = ballType;
  } return this.ballType;
};
