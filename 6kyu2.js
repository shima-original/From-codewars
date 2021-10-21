
/*Digital root is the recursive sum of all the digits in a number.Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/
function digital_root(n) {
   
    if(n < 10) return n;
   
    else {
      
        let array = n.toString().split('').map(function(item){
          return parseInt(item);
        });
      
        n = array.reduce(function(a, b){
          return a + b;
        }, 0);  
        
        return digital_root(n);
      }
}

/*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and 
you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly 
ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/
