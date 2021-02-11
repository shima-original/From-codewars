/*The code provided is supposed replace all the dots . in the specified String str with dashes -   */

var replaceDots = function(str) {
  let arr = str.split('.');
  let result = arr.join('-');
  return result;
}
