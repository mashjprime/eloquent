console.log("Hello world");

function minimum(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function countBs(input) {
    let count = 0;
    for(x=0; x < input.length; x++) {
        if(input[x] == "B") {
            count++;
        }
    }
    return count;
}

function countChar(text, character) {
    let count = 0;
    for(x=0; x < text.length; x++) {
        if(text[x] == character) {
            count++;
        }
    }
    return count;
}


console.log(minimum(15, 10));
console.log(isEven(50));
console.log(countBs("Berry Blaster"));
console.log(countChar("Berry Blaster", "r"));
