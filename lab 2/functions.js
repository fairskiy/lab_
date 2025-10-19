

function average(a, b) {
  return (a + b) / 2;
}
console.log(average(74, 36));



function square(x) {
  return x * x;
}
console.log(square(13));



function cube(x) {
  return x * x * x;
}
console.log(cube(6));



function calculate(start, end) {
  let array = [];
  for (let beginning = start; beginning <= end; beginning++) {
    function square(beginning) {
      return beginning * beginning;
    }
    function cube(beginning) {
      return beginning * beginning * beginning;
      function average(square, cube) {
        return (square + cube) / 2;
      }
    }
    array.push(average(square(beginning), cube(beginning)));
  }
  return array;
}
console.log(calculate(0, 9));