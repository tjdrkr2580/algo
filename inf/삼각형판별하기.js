const solution = (a, b, c) => {
  const arr = [a, b, c].sort((b, a) => b - a);
  return arr[2] - (arr[0] + arr[1]) < 0;
};

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
