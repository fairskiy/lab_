
const fn = (ip = "192.167.34.37") => {
  const num = ip.split(".");
  let solution = 0;
  for (let i = 0; i < num.length; i++) {
    solution = solution << 8;
    solution += Number(num[i]);
  }
  return solution;
};
console.log(fn());