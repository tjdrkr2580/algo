function solution(n, m, section) {
  let answer = 0;
  let part = 0;
  section.map((element) => {
    if (element > part) {
      part = element + m - 1;
      answer++;
    }
  });

  return answer;
}
