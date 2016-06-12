//Exercises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich


// var listToArray = function(list){
//     var cur = list
//     var array = [];
//     for(var node in list){
//       array.push(list);
//       cur = cur.rest;
//     }
//     return array;
// }

//Recursion
var deepEqual = function(obj1,obj2){
    
      var cur = obj1;
      for(var node in cur){
          if (typeof cur[node] == "object" && cur[node] != null && typeof obj2[node] == "object" && obj2[node] != null){
            return deepEqual(cur[node],obj2[node]);
          }else if(typeof cur[node] == "object" && cur[node] != null && typeof obj2[node] != "object"){
            return false;
          }else{
            if(obj2[node] != cur[node]){
                return false;
            }
          }
      }
      return true;
}


var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
