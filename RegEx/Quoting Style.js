//Exersises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
var string = /'$|^'(\w)|(\s)'|'(\s)/g;
console.log(text.replace(string, '"$1$3'));
// → "I'm the cook," he said, "it's my job."
console.log(string.exec(text));
// var value;
// while(value = string.exec(text)){
//   console.log(value)
// }