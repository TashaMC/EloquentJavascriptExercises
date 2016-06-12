//Exercises from  http://eloquentjavascript.net/
//Solver: Tasha Markovich

verify("1", /ca[r|t]/ig,
      ["my car", "bad cats"],
      ["camper", "high art"]);

verify("2",/pr?op/g,
       ["pop culture", "mad props"],
       ["plop"]);

verify("3",/ferr(et|y|ari)/g,
      ["ferret", "ferry", "ferrari"],
      ["ferrum", "transfer A"]);

verify("4", /\w+ious$/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify("5", / [.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify("6", /\w{7,}/,
      ["hottentottententen"],
      ["no", "hotten totten tenten"]);

verify("7", /\b[a-d,f-z]+\b/ig,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

function verify(count, regexp, yes, no) {
  // Ignore unfinished exercises
  console.log("\n#"+count);
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (regexp.test(s)){
      console.log("1st Group Expected Matches:");
      console.log(s.match(regexp));
    }else{
      console.log("1st Group Failure to match " + s + "'");
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("2nd Group Unexpected match for " + s.match(regexp) + "'");
    else  
      console.log("2nd Group As Expected: No Matches");
  });
}
