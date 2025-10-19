

function range(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    array.push(beginning);
  }
  return array;
}
console.log(range(15, 30));


function rangeOdd(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    if (beginning % 2) {
      array.push(beginning);
    }
  }
  return array;
}
console.log(rangeOdd(15, 30));