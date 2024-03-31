const fib = (n) => {
  let fi = [0, 1];
  for (let i = 2; i <= n; i++) {
    fi.push(fi[i - 2] + fi[i - 1]);
  }
  return fi[n - 1];
};

const fib1 = (n) => {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  return fib1(n - 1) + fib(n - 2);
};

module.exports = {
  fib,
  fib1,
};
