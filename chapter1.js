console.log("Hello world");

function LoopingTriangle(y) {
    let star = "*";
    for (let x = 0; x < y; x++) {
      console.log(star);
      star += "*";
    }
}


function FizzBuzz() {
    for (let x = 0; x <= 100; x++) {
        if (x % 3 == 0) {
          console.log("Fizz");
        } else if (x % 5 == 0) {
          console.log("Buzz");
        } else console.log(x);
      }
}

let chessOutput = "";
function Chessboard(x, y) {
  for (let depth = 0; depth < y; depth++) {
    if (depth % 2 === 0) {
      chessOutput += "  ";
    }
    for (let width = 0; width < x; width++) {
      chessOutput += "#  ";
    }
    chessOutput += "\n";
  }
  console.log(chessOutput);
}

FizzBuzz();
LoopingTriangle(20);
Chessboard(8, 8);