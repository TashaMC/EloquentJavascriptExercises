//Exercises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

//recursion
var arrayToList = function(array){
    var depth = array.length-1;
    var list={
        value:array[depth],
        rest:null
   }
   return addToList(array, depth-1, list);
}

var addToList = function(array, depth, list){
  if(depth >= 0){
     var newList = {
        value:array[depth],
        rest:list
      }
     list = addToList(array,depth-1, newList);
  }
  return list;
}

//non-recursion
var arrayToListNonRec = function(array){
   var depth = array.length-1;//Start at last index
   
    var list={
        value:array[depth--],
        rest:null
   }
   var next = list;
   while(depth >= 0){
       var newList = {
          value:array[depth--],
          rest:next
        }
        next = newList;
    }
    return next;
}

//Non-Recursion
var listToArrayNonRec = function(list){
    var cur = list
    var array = [];
    while(cur != null){
      array.push(cur.value);
      cur = cur.rest;
    }
    return array;
}

//Recursion
var listToArray = function(list){
    var cur = list
    return addValueToArray(cur, []);
}

var addValueToArray = function(cur,array){
      if(cur != null){
        array.push(cur.value);
        array = addValueToArray(cur.rest,array);
      }
    return array;
}

var prepend = function(value, next){
    var list={
        value:value,
        rest:next
   }
   return list;
}

var nth = function(list,n){
  var cur = list;
  var i = 0;
  while(i<n){
    cur = list.rest
    i+=1;
  }
  return cur.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(listToArrayNonRec(arrayToListNonRec([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
