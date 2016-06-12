//Practiceing Chapter examples from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

//var quotedText = /'([^']*)'/;
//console.log(quotedText.exec("shesaid 'hello'"));

//var notBinary = /[^01]/;
//console.log(notBinary.exec("1100100010100110"));
//console.log(notBinary.exec("1100100010200110"));


// function findDate(string) {
//   var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
//   var match = dateTime.exec(string);
//   console.log(match);
//   return new Date(Number(match[3]),
//                   Number(match[2]) - 1,
//                   Number(match[1]));
// }
// console.log(findDate("30-1-2003"));

// console.log(/cat/.test("concatenate"));
// // → true
// console.log(/\bcat\b/.test("concatenate"));
// // → false

//console.log("Hopper, Grace\nMcCarthy, John\nRitchie, Dennis".replace(/([\w]+), ([\w]+)/g, "$2 $1"));
// → Grace Hopper
//   John McCarthy
//   Dennis Ritchie

//console.log("Hopper, Grace\nMcCarthy, John\nRitchie, Dennis".replace(/(([\w]+), ([\w]+))*/, "$3 $2 $1"));

//var name = "dea+hl[]rd";
//var text = "This dea+hl[]rd guy is super annoying.";
//var escaped = name.replace(/[^\w\s]/g, "\\$&");
//var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
//console.log(escaped);
//console.log(text.replace(regexp, "_$1_"));
// → This _dea+hl[]rd_ guy is super annoying.

//console.log("  word  5555  jjjj".search(/\S/));
// → 2 //this is the starting char count
//console.log("    ".search(/\S/));
// → -1

//var input = "A string with 3 numbers in it... 42 and 88.";
//var number = /\b(\d+)\b/g;///comment out the g and notice how index does not increase.
//var match = number.exec(input);
//console.log(match);
//while ( number.exec(input))
  //console.log("Found", match[1], "at", match.index);
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

 //match = number.exec(input);
 //console.log("Found", match, "at", match.index);
 //match = number.exec(input);
 //console.log("Found", match, "at", match.index);
 //match = number.exec(input);
 //console.log("Found", match, "at", match.index);
 
// function evalAndReturnX(code) {
//   eval(code);
//   return x;
// }

// console.log(evalAndReturnX("var x = 2"));

// var plusOne = new Function("n", "return n + 1;");
// console.log(plusOne(4));

// 1. car and cat
// 2. pop and prop
// 3. ferret, ferry, and ferrari
// 4. Any word ending in ious
// 5. A whitespace character followed by a dot, comma, colon, or semicolon
// 6. A word longer than six letters
// 7. A word without the letter e


