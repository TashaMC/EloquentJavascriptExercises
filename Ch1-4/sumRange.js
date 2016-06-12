//Exercises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

var testError = function(start, end, inc){
  if(inc === undefined || start > end && inc < 0 || end > start && inc > 0 )
    return true;
  else
    return false
}

var myRange = function(start, end, inc){
    if (!testError(start,end,inc)) return "If 'start' is greater than 'end', 'inc' must be negative; If 'end' is greater than 'start', 'inc' must be positive; "
    var count = start;
    var array = [];
    inc = inc || 1;
    while(start > end && count >= end || end > start && count <= end)
    {
      array.push(count);
      count+=inc;
      
      console.log(array);
    }
    return array;
}

var mySum = function(array, inc){
    var count = 0;
    var value = 0;
    while(count < array.length){
      value=value + array[count];
      count=count+1;
    }
    return value;
}

console.log(mySum(myRange(1,10)));//55
console.log(mySum(myRange(2,5,-1)));//error
console.log(mySum(myRange(5,2,-1)));//14
console.log(mySum(myRange(5,2,-1)));//14
console.log(mySum(myRange(1,20,5)));//34
console.log(mySum(myRange(0,20,5)));//50
