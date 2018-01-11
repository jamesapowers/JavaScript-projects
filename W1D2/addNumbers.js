const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback){
  if (numsLeft > 0) {
    reader.question("Give me num: ", function (numStr) {
      const thisNumber = parseInt(numStr);

      sum += thisNumber;
      console.log("Partial sum: " + sum);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
};