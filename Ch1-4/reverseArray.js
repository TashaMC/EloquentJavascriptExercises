//Exersises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

var reverseArray = function(array){
    var newArray = [];
    for(var i = array.length-1; i>=0;i--){
        newArray.push(array[i]);
    }
    return newArray;
}

var reverseArrayInPlace = function(arrayValue){
    var len = arrayValue.length;
    for(var i = 0; i < len/2; i++){
        var curVal = arrayValue[i];
        arrayValue[i] = arrayValue[(arrayValue.length-i)-1];
        arrayValue[arrayValue.length-i-1] = curVal;
    }
    return arrayValue;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5,6];
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]