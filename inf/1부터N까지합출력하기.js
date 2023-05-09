const solution = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) sum += i;
  return sum;
};

console.log(solution(6));
console.log(solution(10));
