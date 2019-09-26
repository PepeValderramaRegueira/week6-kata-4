function digPow(n, p) {
  let sum = 0;

  n.toString()
    .split("")
    .forEach((number, idx) => (sum += +Math.round(Math.pow(+number, p + idx))));

  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(46288, 3));
