//Exersises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

     var check= function(x){
        if(x==0)
              return true
        if(x==1)
              return false
        if(x>1)
              return check(x-2)
        if(x<0)
              return check(-(x-2))
     }
     console.log(check(-365));
     
     