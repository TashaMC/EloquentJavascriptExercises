//Exersises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

var countBs = function(s) {
    var len= s.length-1;
    var count=0;
    while(len>=0){
      if(s[len]==="B")
        count+=1; 
      len--;
    }
    return count
}

console.log(countBs("BBC"));
// → 2

var countChar = function(s,letter) {
    var len= s.length-1;
    count=0;
    while(len>=0){
      if(s[len]===letter)
        count+=1; 
      len--;
    }
    return count
}

console.log(countChar("kakkerlak", "k"));
// → 4