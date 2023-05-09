const solution = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  let minOdd = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      sum += numbers[i];
      if (numbers[i] < minOdd) {
        minOdd = numbers[i];
      }
    }
  }
  return `${sum}\n${minOdd}`;
};

console.log(solution(12, 77, 38, 41, 53, 92, 85));
