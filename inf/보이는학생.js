function solution(...people) {
  let max = people[0];
  let answer = 1;
  for (let i = 1; i < people.length; i++) {
    if (max < people[i]) {
      console.log(max, people[i], answer);
      max = people[i];
      answer++;
    }
  }
  return answer;
}

console.log(solution(130, 135, 148, 140, 145, 150, 150, 153));
