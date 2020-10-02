console.log("Hello world");

// Looping a triangle
let star = "*";
for (let x = 0; x < 7; x++) {
  console.log(star);
  star += "*";
}

// FizzBuzz
for (let x = 0; x <= 100; x++) {
  if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else console.log(x);
}

// Chessboard
function Chessboard(x, y) {

}

Chessboard(8,8);