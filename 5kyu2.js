/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.*/
function generateHashtag (str) {
  if(!str.trim() || str.length < 1) return false;
     let result = '#' + str.split(' ').map(function (elem) {
      return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
    }).join('');
  return result.length > 140 ? false : result;
}  
