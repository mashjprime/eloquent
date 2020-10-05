console.log("Hello World!!!");

function range(a, b, s = 1) {
  let theRange = [];
  if (s > 0) {
    for (let x = a; x <= b; x += s) {
      theRange.push(x);
    }
  } else if (s < 0) {
    for (let x = a; b <= x; x += s) {
      theRange.push(x);
    }
  } else {
    console.log("Step is set to zero");
  }

  return theRange;
}

function sum(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

function reverseArray(array) {
  const reversed = [];
  for (let x = array.length - 1; x >= 0; x--) {
    reversed.push(array[x]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  let length = array.length;
  for (let i = 0; i < length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
console.log(sum(range(1, 10)));
console.log(reverseArray(range(1, 10)));
console.log(reverseArrayInPlace(range(1, 10)));
