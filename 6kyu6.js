
/* You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. 
Three programming languages will be represented: Python, Ruby and JavaScript.
Your task is to return either:
    true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
    false otherwise.*/

function isLanguageDiverse(list) {
  let pcounter = 0;
  let rcounter = 0;
  let jcounter = 0;
  
  for(let i = 0; i < list.length; i += 1){
    if(list[i].language.toLowerCase() === 'python'){
      pcounter += 1;
    }
    else if(list[i].language.toLowerCase() === 'ruby'){
      rcounter += 1;
    }
    else{
      jcounter += 1;
    }
  }
  
  let max = Math.max(pcounter, rcounter, jcounter);
  if(max/pcounter <= 2 && max/rcounter <= 2 && max/jcounter <= 2) return true;
  else {
    return false;
  }
}

/*A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed
The total number of bits will always be a multiple of 8.
The data is given in an array*/

function dataReverse(data) {
  let result = [];
  
  while(data.length != 0){
    let byte = data.splice(0, 8);
    result.unshift(byte);
  }
  return result.flat();
}


/* An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM 
wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).*/
function withdraw(n) {
  for(let i = 0; i <= 100; ++i){
    for(let j = 0; j <= 100; ++j){
      for(let k = 0; k <= 100; ++k){
        if(k*100 + j*50 + i*20 === n) return [k, j, i];
      }
    }
  }
}


/*To participate in a prize draw each one gives his/her firstname.
Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
The length of the firstname is added to the sum of these ranks hence a number som.
An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
Now one can sort the firstnames in decreasing order of the winning numbers. 
When two people have the same winning number sort them alphabetically by their firstnames.*/

function rank(st, we, n) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let names = st.toLowerCase().split(',');
  let result = {};
  let array = [];
  
  function byField(field){
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }
  
  if(st.length === 0){
    return "No participants";
  } else {
      for(let i = 0; i < names.length; i += 1){
        let symbols = names[i].split('');
        for(let j = 0; j < symbols.length; j += 1){
          for(let k = 0; k < alphabet.length; k += 1){
            if(symbols[j] === alphabet[k]) symbols[j] = k + 1; 
          }
        }
        let sum = symbols.reduce((all, cur) => all + cur, 0);
        let som = sum + symbols.length;
        let winningNumber = som * we[i];
        let key = names[i];
        result[key] = winningNumber;
        array.push(result);
        result = {};
        array.sort(byField('key'));
      }  
    return array; //возвращается несортированный
    //а здесь надо взять первый элемент и если он не равен второму - return
    //а если он равен второму, отсортировать их по ключу, по алфавиту
  }
}
