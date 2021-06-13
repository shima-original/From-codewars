/*In a small restaurant there are A tables for one person and B tables for two persons.
It it known that N groups of people come today, each consisting of one or two people.
If a group consist of one person, it is seated at a vacant one-seater table. If there are none of them, it is seated at a vacant two-seater table. 
If there are none of them, it is seated at a two-seater table occupied by single person. 
If there are still none of them, the restaurant denies service to this group.
If a group consist of two people, it is seated at a vacant two-seater table. If there are none of them, the restaurant denies service to this group.
You are given a chronological order of groups coming. You are to determine the total number of people the restaurant denies service to.
Input contains two integers A and B - the number of one-seater and the number of two-seater tables respectively, 
and a list of integers - the number of people in each group of clients in chronological order of their arrival.
Return the total number of people the restaurant denies service to.*/
function restaurant(a,b,t){
  let result = 0;
  let c = 0;
  for(i = 0; i < t.length; i += 1){
    
    if(t[i] == 1){
      if(a > 0){
        a -= 1;
      }
      else if(a == 0 && b > 0){
        b -= 1;
        c += 1;
      }
      else if(a == 0 && b == 0 && c > 0){
        c -= 1;
      }
      else if(a == 0 && b == 0){
        result += 1;
      }
    }
    
    else if(t[i] == 2){
      if(b > 0){
        b -= 1;
      }
      else if(b == 0){
        result += 2;
      }
    }
  } return result;
}


