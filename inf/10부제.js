const solution = (a, b, c, d, e, f, g, h) => {
  const num = a;
  const arr = [b, c, d, e, f, g, h];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === num) count++;
  }
};

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33));
console.log(solution(0, 12, 20, 54, 30, 87, 91, 30));
