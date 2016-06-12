//Exercises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

var Math={};
Math.min = function(x,y){
      if(x==y)
          return null;
      if(x<y)
           return x;
      if(y<x)
           return y;   
}

console.log(Math.min(356,765));